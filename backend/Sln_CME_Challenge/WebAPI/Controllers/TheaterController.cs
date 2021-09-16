using BLC.Interfaces;
using BLC.Services;
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
    public class TheaterController : ControllerBase
    {
        private readonly ITheaterService _service;

        public TheaterController(ITheaterService service)
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
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPost("DeleteTheater")]
        public async Task<IActionResult> DeleteTheater(Theater theater)
        {
            try
            {
                var Id = theater.TheaterId;
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

        [HttpPost("EditTheater")]
        public async Task<IActionResult> EditTheater(Theater theater)
        {
            try
            {
                var created = await _service.Edit(theater);
                if (!created)
                    return NotFound();

                return Ok(theater);
            }
            catch(Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPut("UpdateTheater")]
        public async Task<IActionResult> UpdateTheater(Theater theater)
        {
            try
            {
                var updated = await _service.Update(theater);
                if (!updated)
                    return NotFound();

                return Ok(theater);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }
    }
}
