using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using todoApp.Models;

namespace todoApp.Services
{
    public class TodoRepository : ITodoRepository
    {
        private readonly TodoContext _context;

        public TodoRepository(TodoContext context)
        {
            _context = context;
        }

        public void CreateTodo(Todo todo)
        {
            todo.CreatedDate = DateTime.Now;

            _context.Todos.Add(todo);
        }

        public void DeteleTodo(Todo todo)
        {
            _context.Remove(todo);
        }

        public IEnumerable<Todo> GetListOfTodos()
        {
            return _context.Todos.ToList();
        }

        public Todo GetTodoById(int id)
        {
            return _context.Todos.FirstOrDefault(x => x.Id == id);
        }

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdateTodo(Todo todo)
        {
            _context.Todos.Update(todo);
        }
    }
}
