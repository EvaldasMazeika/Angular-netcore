using Microsoft.AspNetCore.Mvc;

namespace todoApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
