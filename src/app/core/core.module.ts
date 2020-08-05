import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreListComponent } from './core-list/core-list.component';



@NgModule({
  declarations: [CoreListComponent],
  imports: [
    CommonModule
  ],
  exports: [CoreListComponent]
})
export class CoreModule { }
