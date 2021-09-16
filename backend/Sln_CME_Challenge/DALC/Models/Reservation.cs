using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace DALC.Models
{
    [Table("Reservation")]
    public partial class Reservation
    {
        [Key]
        public int ReservationId { get; set; }
        [Column("date", TypeName = "date")]
        public DateTime Date { get; set; }
        public int SeatId { get; set; }
        public int StatusId { get; set; }
        public string Description { get; set; }
        public int UserId { get; set; }
        public bool IsApproved { get; set; }

        [ForeignKey(nameof(SeatId))]
        [InverseProperty("Reservations")]
        public virtual Seat Seat { get; set; }
        [ForeignKey(nameof(StatusId))]
        [InverseProperty("Reservations")]
        public virtual Status Status { get; set; }
        [ForeignKey(nameof(UserId))]
        [InverseProperty("Reservations")]
        public virtual User User { get; set; }
    }
}
