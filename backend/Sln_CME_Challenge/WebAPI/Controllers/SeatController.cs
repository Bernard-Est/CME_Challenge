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
    public class SeatController : ControllerBase
    {
        private readonly ISeatService _service;

        public SeatController(ISeatService service)
        {
            _service = service;
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var list = await _service.GetAll();
            return Ok(list);
        }


        [HttpPost("DeleteSeat")]
        public async Task<IActionResult> DeleteSeat(Seat seat)
        {
            try
            {
                var Id = seat.SeatId;
                var deleted = await _service.Delete(Id);

                if (deleted)
                    return NoContent();

                return NotFound();
            }
            catch(Exception ex)
            {
                return NotFound(ex.Message);
            }
            
        }

        [HttpPost("EditSeat")]
        public async Task<IActionResult> EditSeat(Seat seat)
        {
            var created = await _service.Edit(seat);
            if (!created)
                return NotFound();

            return Ok(seat);
        }

        [HttpPut("Update")]
        public async Task<IActionResult> UpdateSeat(Seat seat)
        {
            var updated = await _service.Update(seat);
            if (!updated)
                return NotFound();

            return Ok(seat);
        }
        [HttpPut("UpdateSeatAvailibility")]
        public async Task<IActionResult> UpdateSeatAvailibility(UpdateSeatAvailibilityParams param)
        {
            var updated = await _service.UpdateSeatAvailibility(param.seatId , param.isAvailable);
            if (!updated)
                return NotFound();

            return Ok();
        }

        [HttpGet("GetByPlaysId/{playsId}")]
        public async Task<IActionResult> GetByPlaysId(string PlaysId)
        {
            try
            {
                int IdS = int.Parse(PlaysId);
                var list = await _service.GetByPlaysId(IdS);
                return Ok(list);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
