using DALC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLC.Interfaces
{
    public interface IStatusService
    {
        Task<List<Status>> GetAll();
    }
}
