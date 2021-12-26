using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using NPOI.SS.Formula.Functions;
using PaginationBackEnd.DTOs;
using PaginationBackEnd.Services;
using System.Collections.Generic;
using System.Linq;

namespace PaginationBackEnd.Controllers
{
    [ApiController]
    [Route("api/book")]
    public class BookController : ControllerBase
    {
        private readonly IRepository _repository;
        private readonly IMapper _mapper;
        
        public BookController(IRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<List<BookDTO>> Get([FromQuery] PaginationDTO paginationDTO)
        {
            var result = _repository.GetAllBooks();

            var queryResultPage = result
            //.OrderBy(NPOI.SS.Formula.Functions.ToLambda<T>(paginationDTO.SortColumnName))
            .Skip(paginationDTO.RecordsPerPage * paginationDTO.Page)
                  .Take(paginationDTO.RecordsPerPage);

            Response.Headers.Add("totalCount", result.Count().ToString());

            return _mapper.Map<List<BookDTO>>(queryResultPage);
        }
    }
}
