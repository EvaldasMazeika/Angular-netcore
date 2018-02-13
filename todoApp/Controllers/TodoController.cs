using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using todoApp.Models;
using todoApp.Services;

namespace todoApp.Controllers
{
    [Route("api/todo")]
    public class TodoController : Controller
    {
        private readonly ITodoRepository _repo;

        public TodoController(ITodoRepository repo)
        {
            _repo = repo;
        }


        [HttpGet()]
        public IActionResult GetList()
        {
            var result = _repo.GetListOfTodos();

            return Ok(result);
        }

        [HttpGet("{id}", Name = "GetTodo")]
        public IActionResult GetTodoById(int id)
        {
            var result = _repo.GetTodoById(id);

            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);

        }

        [HttpPost()]
        public IActionResult CreateTodo([FromBody] Todo todo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            _repo.CreateTodo(todo);

            if (!_repo.Save())
            {
                throw new Exception("erroorrr");
            }

            return CreatedAtRoute("GetTodo", new { id = todo.Id }, todo);
        }

        [HttpDelete("{id}")]
        public IActionResult DeteleTodo(int id)
        {
            var result = _repo.GetTodoById(id);

            if (result == null)
            {
                return NotFound();
            }

            _repo.DeteleTodo(result);

            if (!_repo.Save())
            {
                throw new Exception("erroor deleting");
            }

            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTodo(int id, [FromBody] Todo todo)
        {
            var result = _repo.GetTodoById(id);

            if (result == null)
            {
                return NotFound();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            //TODO: need to workout this better
            result.Name = todo.Name;
            result.Description = todo.Description;
            result.IsCompleted = todo.IsCompleted;
            result.ModifiedDate = DateTime.Now;


            _repo.UpdateTodo(result);

            if(!_repo.Save())
            {
                throw new Exception("cant update");
            }

            return NoContent();

        }


    }
}
