import { ITable } from "../Interfaces/ITable";

export class Table implements ITable {
    constructor(private rows:any[], private collumns:any[]){
        this.rows = [{
            text: ''
        }];
        this.collumns = [{...this.rows}];
    }

    public getRowCount(){
       return this.rows.length;
    }

    public getCollumnCount(){
        return this.collumns.length;
    }

    public getRows(){
        return this.rows;
    };

    public getCollumns(){
        return this.collumns;
    };

    public addRow(){
        return this.rows.push({text: ''})
    };

    public addCollumn(){
        return this.collumns.push({...this.rows})
    }


    // public getRowCount(){
    //     return this.rows
    // }
    // public getCollumnCount(){
    //     return this.collumns
    // }
    // public addRow(){
    //     return this.rows++
    // }
    // public addCollumn(){
    //     return this.collumns++
    // }
}