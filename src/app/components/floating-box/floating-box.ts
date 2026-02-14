import { Component ,Input } from '@angular/core';
@Component({
  selector: 'app-floating-box',
  imports: [],
  templateUrl: './floating-box.html',
  styleUrl: './floating-box.scss',
})
export class FloatingBox {
  @Input() bottom: string = '0';
  @Input() right: string = '0';
}
