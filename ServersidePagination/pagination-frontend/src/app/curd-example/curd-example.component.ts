import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BookService } from '../book.service';
import { bookDTO } from '../bookDTO';
import { CrudDialogComponent } from './crud-dialog/crud-dialog.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-curd-example',
  templateUrl: './curd-example.component.html',
  styleUrls: ['./curd-example.component.css'],
})
export class CurdExampleComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'auther',
    'publishDate',
    'actions',
  ];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  books: bookDTO[];
  totalCount;
  pageSize = 5;

  public dialog: MatDialog;

  constructor(private _bookService: BookService, private _dialog: MatDialog) {
    this.dialog = _dialog;
  }

  ngOnInit() {
    this.loadData(0, this.pageSize, 'id', 'asc');
  }

  handlePageEvent(event: PageEvent) {
    this.loadData(
      event.pageIndex,
      event.pageSize,
      this.sort.active,
      this.sort.direction
    );
  }

  edit(book) {
    const dialogRef = this.dialog.open(CrudDialogComponent, {
      direction: 'ltr',
      data: book,
    });

    dialogRef.afterClosed().subscribe((result) => {
      //this.book = book;
    });
  }

  sortData(event: PageEvent){

    this.loadData(
      0,
      this.pageSize,
      this.sort.active,
      this.sort.direction
    );
  }
  loadData(
    pageIndex: number,
    pageSize: number,
    sortActive: string,
    sortDirection: string
  ) {
    this._bookService
      .getAll(pageIndex, pageSize, sortActive, sortDirection)
      .subscribe((Response: HttpResponse<bookDTO[]>) => {
        this.totalCount = Response.headers.get('totalCount');

        this.dataSource = new MatTableDataSource<bookDTO>(Response.body);
        this.dataSource.sort = this.sort;
      });
  }
}
