import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { TablePaginationExampleComponent } from './table-pagination-example/table-pagination-example.component';
import { FormsModule } from '@angular/forms';
import { CurdExampleComponent } from './curd-example/curd-example.component';
import { CrudDialogComponent } from './curd-example/crud-dialog/crud-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CurdExampleComponent,
    CrudDialogComponent,
    TablePaginationExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  entryComponents: [CrudDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
