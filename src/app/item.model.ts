export class Item {
    public id: number;
    public name: string;
    public isCompleted:boolean

    constructor (id:number,name:string, isCompleted:boolean ) {
        this.id =id;
        this.name =name;
        this.isCompleted = isCompleted;

    }

}