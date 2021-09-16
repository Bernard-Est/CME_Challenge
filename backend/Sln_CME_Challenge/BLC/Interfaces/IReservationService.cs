using DALC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLC.Interfaces
{
    public interface IReservationService
    {
        Task<List<Reservation>> GetAll();
        Task<bool> Edit(Reservation Reser);
        Task<bool> Delete(int id);
        Task<List<Reservation>> GetBySeatId(int seatId);
        Task<bool> Update(Reservation Reser);
        Task<Reservation> GetById(int id);
        Task<List<Reservation>> GetUserReservation(int playId , int userId);
        Task<List<Reservation>> GetByStatusId(int statusId);
    }
}
