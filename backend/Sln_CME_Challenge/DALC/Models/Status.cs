using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace DALC.Models
{
    [Table("Status")]
    public partial class Status
    {
        public Status()
        {
            Reservations = new HashSet<Reservation>();
        }

        [Key]
        public int StatusId { get; set; }
        [Required]
        [StringLength(50)]
        public string Type { get; set; }

        [InverseProperty(nameof(Reservation.Status))]
        public virtual ICollection<Reservation> Reservations { get; set; }
    }
}
