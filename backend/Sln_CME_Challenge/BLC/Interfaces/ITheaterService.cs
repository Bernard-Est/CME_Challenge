using DALC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLC.Interfaces
{
    public interface ITheaterService
    {
        Task<List<Theater>> GetAll();
        Task<bool> Edit(Theater theater);
        Task<bool> Delete(int id);
        Task<bool> Update(Theater theater);
        Task<Theater> GetById(int id);
     }
}
