using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace DALC.Models
{
    [Table("Theater")]
    public partial class Theater
    {
        public Theater()
        {
            Plays = new HashSet<Play>();
        }

        [Key]
        public int TheaterId { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        public int NbSeats { get; set; }

        [InverseProperty(nameof(Play.Theater))]
        public virtual ICollection<Play> Plays { get; set; }
    }
}
