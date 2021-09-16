using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace DALC.Models
{
    public partial class CME_ChallengeContext : DbContext
    {
        public CME_ChallengeContext()
        {
        }

        public CME_ChallengeContext(DbContextOptions<CME_ChallengeContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Play> Plays { get; set; }
        public virtual DbSet<Reservation> Reservations { get; set; }
        public virtual DbSet<Seat> Seats { get; set; }
        public virtual DbSet<Status> Statuses { get; set; }
        public virtual DbSet<Theater> Theaters { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=BERNARD-DESKTOP\\INSTANCE_2K_19_L;Database=CME_Challenge;User ID=sa;Password=sapassword");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Play>(entity =>
            {
                entity.HasOne(d => d.Theater)
                    .WithMany(p => p.Plays)
                    .HasForeignKey(d => d.TheaterId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Plays_Theater");
            });

            modelBuilder.Entity<Reservation>(entity =>
            {
                entity.HasOne(d => d.Seat)
                    .WithMany(p => p.Reservations)
                    .HasForeignKey(d => d.SeatId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Reservation_Seat");

                entity.HasOne(d => d.Status)
                    .WithMany(p => p.Reservations)
                    .HasForeignKey(d => d.StatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Reservation_Status");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Reservations)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Reservation_User");
            });

            modelBuilder.Entity<Seat>(entity =>
            {
                entity.HasOne(d => d.Plays)
                    .WithMany(p => p.Seats)
                    .HasForeignKey(d => d.PlaysId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Seat_Plays");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
