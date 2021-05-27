import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FbCreateResponse, Offer} from '../components/interfaces';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class OfferService {
  constructor(private http: HttpClient) {
  }

  crete(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(`${environment.fbDbUrl}/offer.json`, offer)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...offer,
          id: response.name,
          date: new Date(offer.date)
        };
      }));
  }
}
