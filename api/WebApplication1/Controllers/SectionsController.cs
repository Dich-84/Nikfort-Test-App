using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    public class SectionsController : ApiController
    {
        ISectionService _sectionService = new SectionService();

        public IHttpActionResult GetAll()
        {
            return Ok(_sectionService.GetAll());
        }

        public IHttpActionResult Get(string id)
        {
            return Ok(_sectionService.Get(id));
        }
    }
}
