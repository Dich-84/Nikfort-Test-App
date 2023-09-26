using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    public class ProjectsController : ApiController
    {
        private IProjectService _projectService = new ProjectService();

        public IHttpActionResult GetAll()
        {
            return Ok(_projectService.GetAll());
        }

        public IHttpActionResult Get(string id)
        {
            return Ok(_projectService.Get(id));
        }
    }
}
