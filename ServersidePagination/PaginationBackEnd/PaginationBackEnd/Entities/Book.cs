using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaginationBackEnd.Entities
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Auther { get; set; }
        public DateTime PublishDate { get; set; }
    }
}
