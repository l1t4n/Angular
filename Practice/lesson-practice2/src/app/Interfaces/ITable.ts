export interface ITable {
    getRowCount: () => number,
    getCollumnCount: () => number,
    addRow: () => {},
    addCollumn: () => {},
    getRows: () => string[],
    getCollumns: () => any[]
}