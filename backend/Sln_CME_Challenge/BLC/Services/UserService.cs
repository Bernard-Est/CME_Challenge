using BLC.Interfaces;
using DALC.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static BCrypt.Net.BCrypt;

namespace BLC.Services
{
    public class UserService : IUserService
    {
        private readonly CME_ChallengeContext _context;

        public UserService(CME_ChallengeContext context)
        {
            _context = context;
        }

        public async Task<User> Authenticate(string username, string password)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Username == username);
            if (user != null)
            {
                var isIdenticalPasswords = Verify(password , user.Password);
                if (isIdenticalPasswords)
                {
                    return user;
                }
                throw new Exception("Invalid password");
            }
            else
            {
                throw new Exception("Username not found");
            }
        }

        public async Task<bool> Create(User user)
        {
            user.Password = HashPassword(user.Password);
            await _context.Users.AddAsync(user);
            var created = await _context.SaveChangesAsync();

            return created > 0;
        }
    }
}
