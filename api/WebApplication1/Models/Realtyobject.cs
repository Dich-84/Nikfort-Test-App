using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Realtyobject
    {
        public string nf_realtyobjectid { get; set; }
        public string nf_name { get; set; }
        public string nf_floorid { get; set; }
        public int nf_numberonfloor { get; set; }
        public int nf_area { get; set; }
        public int nf_price { get; set; }
        public int nf_amount { get; set; }
        public string nf_status { get; set; }
    }
}