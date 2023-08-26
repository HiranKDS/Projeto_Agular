import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-random-number',
  template: `
    <button (click)="generateRandomNumber()">Gerar Número Aleatório</button>
    <app-number-display [randomNumber]="randomNumber"></app-number-display>
  `,
})
export class RandomNumberComponent {
  randomNumber: number | undefined;
  constructor(private dataService: DataService) {}

  generateRandomNumber(): void {
    this.randomNumber = this.dataService.getRandomNumber();
  }
}
