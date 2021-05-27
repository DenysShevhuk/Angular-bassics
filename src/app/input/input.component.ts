import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent  {
  title = 'Вивіз вторсировини';
  text = 'Вивіз вторсировини - один з основних видів діяльності Green utilization. Нам можна здати на переробку ПВД і стрейч-плівку,\n' +
    '    плівку ПВД-стрейч мікс, папір, картон. За вивезення всіх видів вторсировини у нас передбачена винагорода для\n' +
    '    клієнтів.';
}
