using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Section
    {
        public string nf_sectionid { get; set; }
        public string nf_name { get; set; }
        public string nf_buildingid { get; set; }
        public int nf_storeynumber { get; set; }
        public int nf_sortnumber { get; set; }
    }
}