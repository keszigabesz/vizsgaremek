import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDataTableComponent } from './ng-data-table/ng-data-table.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [NgDataTableComponent, FilterPipe],
  imports: [CommonModule, FormsModule],
  exports: [NgDataTableComponent],
})
export class DataTableModule {}
