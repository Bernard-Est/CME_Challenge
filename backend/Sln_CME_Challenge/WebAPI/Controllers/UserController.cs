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
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }
        [HttpPost("create")]
        public async Task<IActionResult> CreateUser(User user)
        {
            var created = await _service.Create(user);
            if (!created)
                return NotFound();

            return Ok(user);
        }
        [HttpPost("auth")]
        public async Task<IActionResult> Authenticate(AuthParams authParams)
        {
            if(String.IsNullOrEmpty(authParams.username) || String.IsNullOrEmpty(authParams.password))
            {
                return BadRequest();
            }
            var user = await _service.Authenticate(authParams.username, authParams.password);

            return Ok(user);
        }
    }
}
