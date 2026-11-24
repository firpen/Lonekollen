import { Injectable } from '@angular/core';
import { Anstalld } from './anstalld';

@Injectable({
  providedIn: 'root',
})
export class AnstalldService {
  anstallda: Anstalld[] = [
    { id: 1, namn: 'Anna Svensson', roll: 'Lönekonsult', lon: 25000 },
    { id: 2, namn: 'Erik Berg', roll: 'Utvecklare', lon: 32000 },
    { id: 3, namn: 'Sara Lind', roll: 'HR-specialist', lon: 29500 },
  ];

  hamtaMedId(id: number): Anstalld | undefined {
    return this.anstallda.find((a) => a.id === id);
  }
}
