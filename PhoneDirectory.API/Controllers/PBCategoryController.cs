using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PhoneDirectory.API.Models;

namespace PhoneDirectory.API.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class PBCategoryController
    {
        private readonly APIContext _context ;
        public PBCategoryController(APIContext aPIContext)
        {
            _context=aPIContext;
        }     

        // GET api/pbcategory        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PhoneBookCat>>> GetPhoneBookCatRecords()
        {
            return await _context.PhoneBookCats.ToListAsync();
        }
    }
}