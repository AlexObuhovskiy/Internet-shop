using System.Collections.Generic;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace AngularStart.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult PostData(string name, int age)
        {
            var user = new User
            {
                name = name,
                age = age + 10
            };

            

            return Json(user, JsonRequestBehavior.AllowGet);
        }
    }

    public class User
    {
        public string name { get; set; }
        public int age { get; set; }
    }
}