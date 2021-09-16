using BLC.Interfaces;
using DALC.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLC.Services
{
    public class ReservationService : IReservationService
    {
        private readonly CME_ChallengeContext _context;

        public ReservationService(CME_ChallengeContext context)
        {
            _context = context;
        }

        public async Task<bool> Delete(int id)
        {
            var reservation = await GetById(id);

            if (reservation == null)
                return false;

            _context.Remove(reservation);
            var deleted = await _context.SaveChangesAsync();

            return deleted > 0;
        }

        public async Task<bool> Edit(Reservation Reser)
        {
            await _context.Reservations.AddAsync(Reser);
            var created = await _context.SaveChangesAsync();

            return created > 0;
        }

        public async Task<List<Reservation>> GetAll()
        {
            return await _context.Reservations.ToListAsync();
        }

        public async Task<Reservation> GetById(int id)
        {
            return await _context.Reservations.SingleOrDefaultAsync(r => r.ReservationId == id);
        }

        public async Task<List<Reservation>> GetBySeatId(int seatId)
        {
            return await  _context.Reservations
                .Include(r => r.Status)
                .Include(r => r.Seat)
                .Where(r => r.SeatId == seatId)
                .ToListAsync();
        }

        public async Task<List<Reservation>> GetByStatusId(int statusId)
        {
            return await _context.Reservations
                .Include(r => r.Seat)
                .Where(r => r.StatusId == statusId)
                .ToListAsync();
        }

        public async Task<List<Reservation>> GetUserReservation(int playId , int userId)
        {
            var reservations = await _context.Reservations.Where(r => r.UserId == userId).ToListAsync();
            var seats = await _context.Seats.Where(s => s.PlaysId == playId).ToListAsync();
            var reservationInCurrentPlay = new List<Reservation>();

            foreach (var seat in seats)
            {
                foreach (var reservation in reservations)
                {
                    if(reservation.SeatId == seat.SeatId)
                    {
                        reservationInCurrentPlay.Add(reservation);
                    }
                }
            }

            return reservationInCurrentPlay;
        }

        public async Task<bool> Update(Reservation Reser)
        {
            _context.Update(Reser);
            var updated = await _context.SaveChangesAsync();

            return updated > 0;
        }
    }
}
