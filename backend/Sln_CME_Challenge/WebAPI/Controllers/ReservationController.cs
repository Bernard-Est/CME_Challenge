using BLC.Interfaces;
using DALC.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Parameters;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        private readonly IReservationService _service;

        public ReservationController(IReservationService service)
        {
            _service = service;
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var list = await _service.GetAll();
            return Ok(list);
        }

        [HttpGet("GetBySeatId")]
        public async Task<IActionResult> GetBySeatId(int seatId)
        {
            var list = await _service.GetBySeatId(seatId);
            return Ok(list);
        }

        [HttpPost("DeleteReservation")]
        public async Task<IActionResult> DeleteReservation(int reserId)
        {
            var deleted = await _service.Delete(reserId);

            if (deleted)
                return NoContent();

            return NotFound();
        }

        [HttpPost("EditReservation")]
        public async Task<IActionResult> EditReservation(Reservation reser)
        {
            var created = await _service.Edit(reser);
            if (!created)
                return NotFound();

            return Ok(reser);
        }

        [HttpPut("Update")]
        public async Task<IActionResult> UpdateReservation(Reservation reser)
        {
            try
            {
                var updated = await _service.Update(reser);
                if (!updated)
                    return NotFound();

                return Ok(reser);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet("GetBySeatId/{seatId}")]
        public async Task<IActionResult> GetBySeatId(string SeatId)
        {
            try
            {
                int IdS = int.Parse(SeatId);
                var list = await _service.GetBySeatId(IdS);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPost("GetByUserId")]
        public async Task<IActionResult> GetByUserId(GetReseservationBasedOnPlayParams param)

        {
            try
            {
                var list = await _service.GetUserReservation(param.playId, param.userId);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet("GetByStatusId/{statusId}")]
        public async Task<IActionResult> GetByStatusId(int statusId)
        {
            try
            {
                var list = await _service.GetByStatusId(statusId);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
