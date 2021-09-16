using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Parameters
{
    public class UpdateSeatAvailibilityParams
    {
        public int seatId { get; set; }

        public bool isAvailable { get; set; }
    }
}
