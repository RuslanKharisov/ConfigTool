import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlcModules } from '../models/modules';

@Injectable({
  providedIn: 'root'
})
export class PlcModulesService {

    url: string = "http://localhost:3000/plcModules"
  constructor(private http: HttpClient) { }

  getPlcModules(){
    return this.http.get<IPlcModules[]>(this.url);
  }

  getPlcModule(id: number){
    return this.http.get<IPlcModules>(`${this.url}/${id}`);
  }
}
