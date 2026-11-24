import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Anstalld } from '../anstalld';

@Component({
  selector: 'app-anstalld-kort',
  standalone: false,
  templateUrl: './anstalld-kort.html',
  styleUrl: './anstalld-kort.scss',
})
export class AnstalldKort {

  @Input() anstalld!: Anstalld;

  @Output() valdAnstalld = new EventEmitter<Anstalld>();

  klick() {
    this.valdAnstalld.emit(this.anstalld);
  }
}
