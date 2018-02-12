using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using todoApp.Models;

namespace todoApp.Services
{
    public interface ITodoRepository
    {
        IEnumerable<Todo> GetListOfTodos();
        Todo GetTodoById(int id);
        void CreateTodo(Todo todo);

        bool Save();
        void DeteleTodo(Todo todo);
    }
}
