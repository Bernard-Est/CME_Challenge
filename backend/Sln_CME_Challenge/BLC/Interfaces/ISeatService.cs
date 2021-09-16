using DALC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLC.Interfaces
{
    public interface ISeatService
    {
        Task<List<Seat>> GetAll();
        Task<bool> Edit(Seat seat);
        Task<bool> Delete(int id);
        Task<List<Seat>> GetByPlaysId(int PlaysId);
        Task<bool> Update(Seat seat);
        Task<Seat> GetById(int Id);

        Task<bool> UpdateSeatAvailibility(int seatId, bool isAvailable);
    }
}
