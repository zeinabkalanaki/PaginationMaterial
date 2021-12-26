using PaginationBackEnd.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PaginationBackEnd.Services
{
    public interface IRepository
    {
        List<Book> GetAllBooks();
    }
}
