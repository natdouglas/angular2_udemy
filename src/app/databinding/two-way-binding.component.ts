import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-two-way-binding',
  template: `
    <input [(ngModel)]="person.name" placeholder ="name">
  `
})
export class TwoWayBindingComponent {
  person = {
    name:'Max',
    age: 27
  };
}
