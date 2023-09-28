using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Services;


namespace WebApplication1.Controllers
{
    public class FloorsController : ApiController
    {
        private IFloorService _floorService = new FloorService();

        public IHttpActionResult GetAll()
        {
            return Ok(_floorService.GetAll());
        }

        public IHttpActionResult Get(string id)
        {
            return Ok(_floorService.Get(id));
        }
    }
}
