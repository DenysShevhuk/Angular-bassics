import {Component, Input, OnInit} from '@angular/core';
import {Conveniently} from '../home/home.component';

@Component({
  selector: 'app-block-conveniently',
  templateUrl: './block-conveniently.component.html',
  styleUrls: ['./block-conveniently.component.scss']
})
export class BlockConvenientlyComponent  {
  @Input() conveniently: Conveniently;
}
