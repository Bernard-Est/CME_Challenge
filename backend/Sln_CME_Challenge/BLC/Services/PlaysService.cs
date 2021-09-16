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
    public class PlaysService : IPlaysService
    {
        private readonly CME_ChallengeContext _context;

        public PlaysService(CME_ChallengeContext context)
        {
            _context = context;
        }

        public async Task<bool> Delete(int Id)
        {
            var play = await GetById(Id);

            if (play == null)
                return false;

            _context.Remove(play);
            var deleted = await _context.SaveChangesAsync();

            return deleted > 0;
        }

        public async Task<bool> Edit(Play play)
        {
            await _context.Plays.AddAsync(play);
            var created = await _context.SaveChangesAsync();

            return created > 0;
        }

        public async Task<List<Play>> GetAll()
        {
            return await _context.Plays.ToListAsync();
        }

        public async Task<Play> GetById(int Id)
        {
            return await _context.Plays.SingleOrDefaultAsync(x => x.PlaysId == Id);
        }

        public async Task<List<Play>> GetByTheaterId(int Id)
        {
            return await _context.Plays.Where(t => t.TheaterId == Id).ToListAsync();
        }

        public async Task<bool> Update(Play play)
        {
            _context.Update(play);
            var updated = await _context.SaveChangesAsync();

            return updated > 0;
        }
    }
}
