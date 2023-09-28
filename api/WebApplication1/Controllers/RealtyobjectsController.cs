using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    public class RealtyobjectsController : ApiController
    {
        private IRealtyobjectService _realtyobjectService = new RealtyobjectService();

        public IHttpActionResult GetAll()
        {
            return Ok(_realtyobjectService.GetAll());
        }

        public IHttpActionResult Get(string id)
        {
            return Ok(_realtyobjectService.Get(id));
        }

        public IHttpActionResult Put(Realtyobject realtyobject)
        {
            _realtyobjectService.Update(realtyobject);
            return Ok();
        }
    }
}
