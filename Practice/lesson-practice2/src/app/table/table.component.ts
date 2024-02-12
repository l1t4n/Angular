import { Component } from '@angular/core';
import { TablesService } from '../services/tables.service';
import { Table } from '../classes/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  public table:any;
  public rows:string[] = this.tableService.getTable().getRows();
  public collumns:any[] = this.tableService.getTable().getCollumns();
  public isCreated:boolean = false;
  constructor(
    public tableService:TablesService
  ) {
  }

  // ----------------------------------------------- // это я на всякий добавил
  public returnValue(value){
    return value
  }

  public readValue(value){
    this.readValue = value.value
  }
  // ----------------------------------------------- // это я на всякий добавил

  public createTable(){
    this.isCreated = !this.isCreated;

  }

  public addRow(){
    this.tableService.getTable().addRow();
  }

  public addCollumn(){
    this.tableService.getTable().addCollumn();
  }
}
