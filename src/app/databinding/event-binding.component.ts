import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent { //@Output makes onClicked listenable outside of this class
  @Output() clicked = new EventEmitter<string>(); //so you can listen for events
  onClicked() {
    //alert('It worked!');
    this.clicked.emit("It worked!");
  }
}
