import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cunsumer } from '../comman/cunsumer';

@Injectable({
  providedIn: 'root'
})

export class CsrserviceService {
  private csrURL="http://localhost:8080/csr/list";
  private csrsave="http://localhost:8080/csr/addcunsumer";
  private csrdel="http://localhost:8080/csr/delete";
  private csrupdate="http://localhost:8080/csr/update";
  private csrfind="http://localhost:8080/csr/find";
  constructor(private http:HttpClient) 
  { 

  }
  getAllCunsumer():Observable<any>
  {
   return this.http.get(this.csrURL);
  }

  SaveCunsumer(cunsumer:Cunsumer):Observable<any>
  {
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.post<Cunsumer>(this.csrsave,cunsumer,httpOptions);
  }

deleteCunsumer(id: Number) {
   
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.delete<Cunsumer>(this.csrdel+`/${id}`,httpOptions);
  }

getCunsumerBycunsumer_id(csrID:number):Observable<Cunsumer>
  {
    const csrIDURl=this.csrfind+"/"+csrID;
    return  this.http.get<Cunsumer>(csrIDURl);
  }

  updateCunsumer(cunsumer:Cunsumer):Observable<Cunsumer>{
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.put<Cunsumer>(this.csrupdate+`/${cunsumer.cunsumer_id}`,cunsumer,httpOptions);
  }

  

  
}
