using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    public class BuildingsController : ApiController
    {
        private IBuildingService _buildingService = new BuildingService();

        public IHttpActionResult GetAll()
        {
            return Ok(_buildingService.GetAll());
        }

        public IHttpActionResult Get(string id)
        {
            return Ok(_buildingService.Get(id));
        }
    }
}
