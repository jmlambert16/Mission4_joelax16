using Microsoft.AspNetCore.Mvc;
using Mission4_1_.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Mission4_1_.Controllers
{
    public class blah : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult calc()
        {
            return (View());
        }
        
        [HttpPost]
        public IActionResult calc(calc_model model)
        {
            return View();
        }
    }
}
