import {Component, Input, OnInit} from '@angular/core';
import {Partners} from '../home/home.component';

@Component({
  selector: 'app-block-partners-card',
  templateUrl: './block-partners-card.component.html',
  styleUrls: ['./block-partners-card.component.scss']
})
export class BlockPartnersCardComponent implements OnInit {
  @Input() partners: Partners;

  constructor() {
  }

  ngOnInit(): void {
  }

}
