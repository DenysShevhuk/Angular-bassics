import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent  {
  date: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date());
    });
  });

}
