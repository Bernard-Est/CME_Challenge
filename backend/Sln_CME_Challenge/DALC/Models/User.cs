using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace DALC.Models
{
    [Table("User")]
    public partial class User
    {
        public User()
        {
            Reservations = new HashSet<Reservation>();
        }

        [Key]
        public int UserId { get; set; }
        [Required]
        [StringLength(100)]
        public string Username { get; set; }
        [Required]
        [StringLength(1000)]
        public string Password { get; set; }
        public bool IsAdmin { get; set; }

        [InverseProperty(nameof(Reservation.User))]
        public virtual ICollection<Reservation> Reservations { get; set; }
    }
}
