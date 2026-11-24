import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnstalldService } from '../../anstalld-service';
import { Anstalld } from '../../anstalld';

@Component({
  selector: 'app-lonespec-sida',
  standalone: false,
  templateUrl: './lonespec-sida.html',
  styleUrl: './lonespec-sida.scss',
})
export class LonespecSida implements OnInit {
  anstalld?: Anstalld;

  constructor(private route: ActivatedRoute, private anstalldService: AnstalldService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.anstalld = this.anstalldService.hamtaMedId(id);
  }
}
