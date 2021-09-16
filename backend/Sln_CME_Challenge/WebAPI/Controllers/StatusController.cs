using BLC.Interfaces;
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
    public class StatusController : ControllerBase
    {
        private readonly IStatusService _service;

        public StatusController(IStatusService service)
        {
            _service = service;
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAllStatuses()
        {
            try
            {
                var statuses = await _service.GetAll();

                if (statuses == null)
                    return NoContent();

                return Ok(statuses);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
