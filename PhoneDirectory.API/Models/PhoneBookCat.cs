using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PhoneDirectory.API.Models
{
    public class PhoneBookCat
    {
        [Key]
        public int PBCId { get; set; }
        [Column(TypeName="nvarchar(100)")]
        public string Name {get; set;}
    }
}