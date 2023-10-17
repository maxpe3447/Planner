export class Event{
    public name: String = "";
    public description:String = "";
    public isActual:boolean = true;
    
    public constructor(name:String, desc:String, isActual:boolean) {
       
        this.name = name;
        this.description = desc;
        this.isActual = isActual;
        
    }
}