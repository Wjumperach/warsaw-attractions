import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AttractionsResponse } from '../model/attractions-response';

@Injectable({
  providedIn: 'root'
})
export class AttractionsService {

  private httpClient = inject(HttpClient);

  getAttractions(): Observable<AttractionsResponse>{
    return this.httpClient.get<AttractionsResponse>('/attractions/?apikey=YOUR_KEY');
  }

}
