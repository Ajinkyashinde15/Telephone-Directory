using Microsoft.EntityFrameworkCore;

namespace PhoneDirectory.API.Models
{
    public class APIContext:DbContext
    {
        public APIContext(DbContextOptions<APIContext> options) : base (options)
        {                 }        

        public DbSet<PhoneBook> PhoneBooks {get; set;}
        public DbSet<PhoneBookCat> PhoneBookCats {get; set;}
        
    }
}