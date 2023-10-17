import { Component } from "@angular/core";
import { Event } from "src/models/Event";

@Component({
    selector:'account-home',
    templateUrl:'./accountHome.component.html',
    styleUrls:['./accountHome.component.css']
})
export class AccountHome{
    public events:Event[]=[];
    public selectEvent:Event = new Event("", "", false);
    constructor() {
        this.events.push(new Event('Event1', 'Some information 1', false));
        this.events.push(new Event('Event2', 'Some information 2', false));
        this.events.push(new Event('Event3', 'Some information 3', false));
        this.events.push(new Event('Event4', 'Some information 4', false));
        this.events.push(new Event('Event5', 'Some information 5', false));
        this.events.push(new Event('Event6', 'Some information 6', false));

    }

    public OnClick(item:Event):void {
        this.selectEvent = item;
    }

    public CreateNew():void{
        this.events.push(new Event("<Enter name>", "<Enter description>", false));
    }
}