namespace PaginationBackEnd.DTOs
{
    public class PaginationDTO
    {
        public int Page { get; set; } = 1;

        private readonly int maxAmount = 50;

        private int _recordsPerPage = 10;
        public int RecordsPerPage
        {
            get { return _recordsPerPage; }
            set { _recordsPerPage = (value > maxAmount) ? maxAmount : value; }
        }

        public string SortColumnName { get; set; }
        public string SortDirection { get; set; }

    }
}
