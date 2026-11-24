import { Component, Input } from '@angular/core';
import { Anstalld } from '../anstalld';

@Component({
  selector: 'app-detaljpanel',
  standalone: false,
  templateUrl: './detaljpanel.html',
  styleUrl: './detaljpanel.scss',
})
export class Detaljpanel {
  @Input() valdAnstalld?: Anstalld;
}
