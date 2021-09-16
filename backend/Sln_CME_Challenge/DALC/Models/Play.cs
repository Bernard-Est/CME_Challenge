using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace DALC.Models
{
    public partial class Play
    {
        public Play()
        {
            Seats = new HashSet<Seat>();
        }

        [Key]
        public int PlaysId { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        public string Description { get; set; }
        public int TheaterId { get; set; }

        [ForeignKey(nameof(TheaterId))]
        [InverseProperty("Plays")]
        public virtual Theater Theater { get; set; }
        [InverseProperty(nameof(Seat.Plays))]
        public virtual ICollection<Seat> Seats { get; set; }
    }
}
