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
    public class TheaterService : ITheaterService
    {
        private readonly CME_ChallengeContext _context;

        public TheaterService(CME_ChallengeContext context)
        {
            _context = context;
        }

        public async Task<bool> Delete(int id)
        {
            try
            {
                var theater = await GetById(id);

                if (theater == null)
                    return false;

                _context.Remove(theater);
                var deleted = await _context.SaveChangesAsync();

                return deleted > 0;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> Edit(Theater theater)
        {
            await _context.Theaters.AddAsync(theater);
            var created = await _context.SaveChangesAsync();

            return created > 0;
        }

        public async Task<List<Theater>> GetAll()
        {
            return await _context.Theaters.ToListAsync();
        }

        public async Task<Theater> GetById(int id)
        {
            return await _context.Theaters.SingleOrDefaultAsync(x => x.TheaterId == id);
        }

        public async Task<bool> Update(Theater theater)
        {
            _context.Update(theater);
            var updated = await _context.SaveChangesAsync();

            return updated > 0;
        }
    }
}
