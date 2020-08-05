import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core-list',
  templateUrl: './core-list.component.html',
  styleUrls: ['./core-list.component.scss']
})
export class CoreListComponent implements OnInit {
  @Input() listTitle: string = 'List';
  data = [];
  allData = [];
  @Input() hasFilter: boolean;
  @Input() hasPagination: boolean;
  @Output() createClicked: EventEmitter<any> = new EventEmitter();
  @Output() editClicked: EventEmitter<any> = new EventEmitter();
  @ViewChild('filterField', {static: false}) filterField: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  createButtonClicked() {
    alert('Create Button Cliced in Core Component');
    this.createClicked.emit();
  }

  setListData(inputData) {
    this.data = inputData;
    this.allData = inputData;
  }

  editItem(item) {
    console.log(item);
    this.editClicked.emit(item);
  }

  filterData(event) {
    const searchValue = event.target.value;
    this.data = this.allData.filter((d) => {
      if (d.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
  }
}
