using PaginationBackEnd.Entities;
using PaginationBackEnd.Services;
using System.Collections.Generic;

public class InMemoryRepository : IRepository
{
    private List<Book> _book;
    public InMemoryRepository()
    {
        _book = new List<Book>();
        for (int i = 1; i < 30; i++)
        {
            _book.Add(new Book() { Id = i, Title = "Title" + i, Auther = "Auther" + i, PublishDate = System.DateTime.Now.AddDays(-i) });
        }
    }

    public List<Book> GetAllBooks()
    {
        return _book;
    }
}
