using DALC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLC.Interfaces
{
    public interface IUserService
    {
        Task<User> Authenticate(string username , string password);

        Task<bool> Create(User user);
    }
}
