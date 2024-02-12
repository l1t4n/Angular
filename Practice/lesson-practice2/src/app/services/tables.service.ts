import { Injectable } from '@angular/core';
import { ITable } from '../Interfaces/ITable';
import { Table } from '../classes/table';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  private table = new Table([],[]);
  constructor() { }

  public getTable():ITable{
    return this.table;
  }

  public getRowCount(){
    this.table.getRowCount();
  }

  public getCollumnCount(){
    this.table.getCollumnCount();
  }

  public addTableRow(){
    this.table.addRow();
  }

  public addTableCollumn(){
    this.table.addCollumn();
  }
}
