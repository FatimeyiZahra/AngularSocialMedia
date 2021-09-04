using System.ComponentModel.DataAnnotations;

namespace ServerApp.DTO
{
    public class UserForRegisterDTO
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public string Password { get; set; }


    }
}