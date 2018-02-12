using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace todoApp.Models
{
    public static class TodoContextExtensions
    {
        public static void EnsureSeedDataForContext(this TodoContext context)
        {
            context.RemoveRange(context.Todos);
            context.SaveChanges();

            var todos = new List<Todo>()
            {
                new Todo()
                {
                    CreatedDate = DateTime.Now,
                    IsCompleted = false,
                    Name = "Pirmas taskas",
                    Description = "Pirmas aprasymas"
                },
                new Todo()
                {
                    CreatedDate = DateTime.Now,
                    IsCompleted = false,
                    Name = "Antras taskas",
                    Description = "Antras aprašymas"
                }
            };



            context.AddRange(todos);
            context.SaveChanges();

        }
    }
}
