import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// This makes it safe to use icons (special type for icons)
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
// The different icons I use for the hero right side
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-arrow-up-button',
  imports: [FontAwesomeModule],
  templateUrl: './arrow-up-button.html',
  styleUrl: './arrow-up-button.scss',
})
export class ArrowUpButton {

  faArrowUp:IconDefinition = faArrowUp;

  scrollToTop(): void { window.scrollTo({top: 0,behavior: 'smooth' })};

}
