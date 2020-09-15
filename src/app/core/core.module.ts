import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreListComponent } from './core-list/core-list.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [CoreListComponent],
  imports: [
    CommonModule, TableModule
  ],
  exports: [CoreListComponent]
})
export class CoreModule { }
