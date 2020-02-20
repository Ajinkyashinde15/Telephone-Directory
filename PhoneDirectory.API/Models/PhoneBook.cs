using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PhoneDirectory.API.Models
{
    public class PhoneBook
    {
        [Key]
        public int PhoneBookId { get; set; }
        [Column(TypeName="nvarchar(30)")]
        [Required]
        public string FirstName {get; set;}
        [Column(TypeName="nvarchar(30)")]
        public string LastName {get; set;}
        [Column(TypeName="nvarchar(30)")]
        public string Address {get; set;}
        [Column(TypeName="nvarchar(30)")]
        [Required]
        [Phone]
        public string PhoneNo {get; set;}
        [EmailAddress]
        [Column(TypeName="nvarchar(30)")]
        public string Email {get; set;}
        public int PBCId {get;set;}
    }
}