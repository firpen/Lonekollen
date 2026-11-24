import { Component, OnInit } from '@angular/core';
import { Anstalld } from '../../anstalld';
import { AnstalldService } from '../../anstalld-service';

@Component({
  selector: 'app-anstallda-sida',
  standalone: false,
  templateUrl: './anstallda-sida.html',
  styleUrl: './anstallda-sida.scss',
})
export class AnstalldaSida implements OnInit {
  anstallda: Anstalld[] = [];
  valdAnstalld?: Anstalld;

  constructor(private anstalldService: AnstalldService) {}

  ngOnInit() {
    this.anstallda = this.anstalldService.anstallda;
  }
}
