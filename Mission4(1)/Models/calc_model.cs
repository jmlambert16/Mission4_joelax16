using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_1_.Models
{
    public class calc_model
    {
        [Required]
        [Range(0, 100)]
        public int assignment { get; set; }
        public int group { get; set; }
        public int quiz { get; set; }
        public int midterm { get; set; }
        public int final { get; set; }
        public int intex { get; set; }



    }
}
