import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Mispaises } from "./../interfaces/mispaises";
import { Pais } from "./../interfaces/pais";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  //Base URL
  baseurl = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) { }

  getAllPaises() {
    return this.http.get<Mispaises[]>(this.baseurl);
  }

  getPais() {
    const path = 'https://restcountries.eu/rest/v2/name/peru?fullText=true';
    return this.http.get<Pais[]>(path);
  }

}
