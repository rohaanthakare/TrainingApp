import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreListComponent } from './core-list/core-list.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [CoreListComponent],
  imports: [
    CommonModule, TableModule, ToolbarModule, ButtonModule
  ],
  exports: [CoreListComponent]
})
export class CoreModule { }
