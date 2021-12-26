import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurdExampleComponent } from './curd-example/curd-example.component';
import { TablePaginationExampleComponent } from './table-pagination-example/table-pagination-example.component';

const routes: Routes = [
  { path: 'locally', component: TablePaginationExampleComponent },
  { path: '', component: CurdExampleComponent }, 
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
