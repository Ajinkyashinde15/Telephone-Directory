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
    public class PhoneBookController : ControllerBase
    {       
        private readonly APIContext _context ;
        public PhoneBookController(APIContext aPIContext)
        {
            _context=aPIContext;
        }

         // GET api/phonebook
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PhoneBook>>> GetPhoneBookRecords()
        {
            return await _context.PhoneBooks.ToListAsync();
        }

        // GET api/values/5
        [HttpGet("{id}")]        
        public async Task<ActionResult<PhoneBook>> GetPhoneBookRecord(int id)
        {
            var PhoneBook= await _context.PhoneBooks.FindAsync(id);
            if(PhoneBook==null)
            {
                  return NotFound();  
            }
            return PhoneBook;
        }

        //Update record
        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<ActionResult> PutBankAccount(int id, PhoneBook phoneBook)
        {
            if(id!=phoneBook.PhoneBookId)
            {
                 return BadRequest();   
            }
            _context.Entry(phoneBook).State =EntityState.Modified;

            try{
                await _context.SaveChangesAsync();
            }catch (Exception)
            {
                return NotFound();
            }
            return NoContent();
        }

        // POST api/values
        [HttpPost]
        public async Task<ActionResult<PhoneBook>> PostBankAccount(PhoneBook phoneBook)
        {   
            _context.PhoneBooks.Add(phoneBook);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPhoneBookRecord", new {id=phoneBook.PhoneBookId}, phoneBook);
        }
       
        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PhoneBook>> DeleteBankAccount(int id)
        {
            var PhoneBook= await _context.PhoneBooks.FindAsync(id);
            if(PhoneBook==null)
            {
                  return NotFound();  
            }
            _context.PhoneBooks.Remove(PhoneBook);
            await _context.SaveChangesAsync();
            
            return PhoneBook;
        }
    }
}
