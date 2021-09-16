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
    public class StatusService : IStatusService
    {
        private readonly CME_ChallengeContext _context;

        public StatusService(CME_ChallengeContext context)
        {
            _context = context;
        }

        public async Task<List<Status>> GetAll()
        {
            return await _context.Statuses.ToListAsync();
        }
    }
}
