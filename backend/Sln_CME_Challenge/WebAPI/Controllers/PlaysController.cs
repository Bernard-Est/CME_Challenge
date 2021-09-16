using BLC.Interfaces;
using DALC.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaysController : ControllerBase
    {
        private readonly IPlaysService _service;

        public PlaysController(IPlaysService service)
        {
            _service = service;
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var list = await _service.GetAll();
                return Ok(list);
            }
            catch(Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet("GetByTheaterId/{theaterId}")]
        public async Task<IActionResult> GetByTheaterId(string TheaterId)
        {
            try
            {
                int IdS = int.Parse(TheaterId);
                var list = await _service.GetByTheaterId(IdS);
                return Ok(list);
            }
            catch(Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPost("DeletePlays")]
        public async Task<IActionResult> DeletePlays(Play plays)
        {
            try
            {
                var Id = plays.PlaysId;
                var deleted = await _service.Delete(Id);

                if (deleted)
                    return NoContent();

                return NotFound();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }

        [HttpPost("EditPlays")]
        public async Task<IActionResult> EditPlay(Play play)
        {
            try
            {
                var created = await _service.Edit(play);
                if (!created)
                    return NotFound();

                return Ok(play);
            }
            catch(Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPut("UpdatePlays")]
        public async Task<IActionResult> UpdatePlay(Play play)
        {
            try
            {
                var updated = await _service.Update(play);
                if (!updated)
                    return NotFound();

                return Ok(play);
            }
            catch(Exception ex)
            {
                return NotFound(ex.Message);
            }

        }
    }
}
