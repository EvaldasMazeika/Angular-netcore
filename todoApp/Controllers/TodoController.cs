using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
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

        [HttpGet("{id}")]
        public IActionResult GetTodoById(int id)
        {
            var result = _repo.GetTodoById(id);

            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);

        }

    }
}
