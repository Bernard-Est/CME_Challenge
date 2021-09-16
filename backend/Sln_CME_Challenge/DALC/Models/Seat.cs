using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace DALC.Models
{
    [Table("Seat")]
    public partial class Seat
    {
        public Seat()
        {
            Reservations = new HashSet<Reservation>();
        }

        [Key]
        public int SeatId { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        public int PlaysId { get; set; }
        [Column("available")]
        public bool? Available { get; set; }

        [ForeignKey(nameof(PlaysId))]
        [InverseProperty(nameof(Play.Seats))]
        public virtual Play Plays { get; set; }
        [InverseProperty(nameof(Reservation.Seat))]
        public virtual ICollection<Reservation> Reservations { get; set; }
    }
}
