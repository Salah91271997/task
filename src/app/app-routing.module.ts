import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTableComponent } from './components/form-table/form-table.component';

const routes: Routes = [
  {
    path: '',
    component: FormTableComponent,
  },
  {
    path: 'form',
    component: FormTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
