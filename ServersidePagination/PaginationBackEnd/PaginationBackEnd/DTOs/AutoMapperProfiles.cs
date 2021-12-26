using AutoMapper;
using PaginationBackEnd.Entities;

namespace PaginationBackEnd.DTOs
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<BookDTO, Book>().ReverseMap();
        }
    }
}
