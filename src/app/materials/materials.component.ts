import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Materials} from '../home/home.component';
import {Post} from '../app.component';



@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  isVisible = false;
  @Input() materials: Materials;
  text = 'Детально';
  application = 'Подати заявку';
  ngOnInit(): void {
  }
}
