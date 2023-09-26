using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public abstract class ServiceBase
    {
        protected string GetStoragePath(string fileName)
        {
            return $@"{AppDomain.CurrentDomain.BaseDirectory}\{fileName}";
        }
    }
}