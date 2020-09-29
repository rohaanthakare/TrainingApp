import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core-list',
  templateUrl: './core-list.component.html',
  styleUrls: ['./core-list.component.scss']
})
export class CoreListComponent implements OnInit {
  @Input() listTitle: string = 'List';
  @Input() columns = [];
  data = [];
  allData = [];
  pageSize = 5;
  totalRecords = 0;
  startIndex = 0;
  endIndex = this.startIndex + this.pageSize;
  currentPage = 0;
  lastPageNumber = 0;
  totalCount = 0;
  @Input() hasFilter: boolean;
  @Input() hasPagination: boolean;
  @Output() createClicked: EventEmitter<any> = new EventEmitter();
  @Output() editClicked: EventEmitter<any> = new EventEmitter();
  @Output() navigateToPageClicked: EventEmitter<any> = new EventEmitter();
  @ViewChild('filterField', {static: false}) filterField: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  createButtonClicked() {
    alert('Create Button Cliced in Core Component');
    this.createClicked.emit();
  }

  setListData(inputData, total?) {
    this.data = inputData;
    this.allData = inputData;
    this.lastPageNumber = Math.floor(this.allData.length / this.pageSize);
    this.totalCount = total;
    // this.setPagination();
  }

  editItem(item) {
    console.log(item);
    this.editClicked.emit(item);
  }

  setPagination() {
    // this.endIndex = this.startIndex + this.pageSize;
    this.data = this.allData.slice(this.startIndex, this.endIndex);
  }

  navigateToPage(param) {
    if (param === 'next') {
      this.currentPage++;
      this.startIndex = this.currentPage * this.pageSize;
    }

    if (param === 'prev') {
      this.currentPage--;
      this.startIndex = this.currentPage * this.pageSize; 
    }

    if (param === 'first') {
      this.currentPage = 0;
      this.startIndex = this.currentPage * this.pageSize; 
    }

    if (param === 'last') {
      this.currentPage = this.lastPageNumber;
      this.startIndex = this.currentPage * this.pageSize; 
    }

    this.endIndex = this.startIndex + this.pageSize; 
    this.navigateToPageClicked.emit(this.currentPage);
    // this.setPagination();
  }

  filterData(event) {
    const searchValue = event.target.value;
    this.data = this.allData.filter((d) => {
      if (d.fullName.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    if (this.data.length > this.pageSize) {
      this.setPagination();
    }
  }

  onPageChange(event) {
    console.log('--------inside on page-------');
    console.log(event);
    this.navigateToPageClicked.emit(event);
  }
}
