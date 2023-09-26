using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Floor
    {
        public string nf_floorid { get; set; }
        public string nf_name { get; set; }
        public string nf_sectionid { get; set; }
        public int nf_sortnumber { get; set; }
        public int nf_maxnumberonfloor { get; set; }
    }
}