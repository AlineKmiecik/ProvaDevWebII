import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../models/Medico';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SistemaMedicoService {

  constructor(private http: HttpClient) {}

  list(): Observable<Medico[]>{
    return this.http.get<Medico[]>("http://localhost:1234/medico/listar");
  }

  create(Medico: Medico): Observable<Medico> {
    return this.http.post<Medico>("http://localhost:1234/medico/cadastrar", Medico);
  }

}
