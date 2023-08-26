import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-display',
  template: '<p>Número Aleatório: {{ randomNumber }}</p>',
})

export class NumberDisplayComponent {
  @Input() randomNumber: number | undefined;
}
