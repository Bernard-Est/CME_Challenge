using DALC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLC.Interfaces
{
    public interface IPlaysService
    {
        Task<bool> Edit(Play play);
        Task<bool> Delete(int Id);
        Task<List<Play>> GetAll();
        Task<Play> GetById(int Id);
        Task<bool> Update(Play play);
        Task<List<Play>> GetByTheaterId(int Id);
    }
}
