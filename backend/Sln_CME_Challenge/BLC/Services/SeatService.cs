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
    public class SeatService : ISeatService
    {
        private readonly CME_ChallengeContext _context;

        public SeatService(CME_ChallengeContext context)
        {
            _context = context;
        }

        public async Task<bool> Delete(int id)
        {
            var seat = await GetById(id);

            if (seat == null)
                return false;

            _context.Remove(seat);
            var deleted = await _context.SaveChangesAsync();

            return deleted > 0;
        }

        public async Task<bool> Edit(Seat seat)
        {
            await _context.Seats.AddAsync(seat);
            var created = await _context.SaveChangesAsync();

            return created > 0;
        }

        public async Task<List<Seat>> GetAll()
        {
            return await _context.Seats.ToListAsync();
        }

        public async Task<Seat> GetById(int Id)
        {
            return await _context.Seats.SingleOrDefaultAsync(x => x.SeatId == Id);
        }

        public async Task<List<Seat>> GetByPlaysId(int PlaysId)
        {
            return await _context.Seats.Where(t => t.PlaysId == PlaysId).ToListAsync();
        }

        public async Task<bool> Update(Seat seat)
        {
            _context.Update(seat);
            var updated = await _context.SaveChangesAsync();

            return updated > 0;
        }

        public async Task<bool> UpdateSeatAvailibility(int seatId, bool isAvailable)
        {
            var seat = await _context.Seats.FirstOrDefaultAsync(s => s.SeatId == seatId);
            seat.Available = isAvailable;
            _context.Update(seat); 
            var updated = await _context.SaveChangesAsync();

            return updated > 0;
        }
    }
}
