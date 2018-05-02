using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Arbetsprov.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Arbetsprov.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
		[HttpGet]
        public IActionResult Index()
        {
            return View();
        }

		[HttpGet]
		public IActionResult Info(int id)
		{
			
			InfoVM model = new InfoVM()
			{
				CharacterId = id,
			};

			return PartialView("_Info", model);
		}
	}
}
