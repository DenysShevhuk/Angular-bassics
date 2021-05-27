import {Component, Input, OnInit} from '@angular/core';
import {Work} from '../home/home.component';

@Component({
  selector: 'app-block-scheme-work-text',
  templateUrl: './block-scheme-work-text.component.html',
  styleUrls: ['./block-scheme-work-text.component.scss']
})
export class BlockSchemeWorkTextComponent {
  @Input() work: Work;
}
