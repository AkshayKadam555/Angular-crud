import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class StudentService {
  STUDENTURL = "http://localhost:3000/student";
  studentInfo: any;
  constructor(private httpClient: HttpClient) {}

  addStudent(data: any): Observable<any> {
    return this.httpClient.post<any>(this.STUDENTURL, data);
  }

  getAllStudent(): Observable<any> {
    return this.httpClient
      .get<any>(this.STUDENTURL, { observe: "response" })
      .pipe(map(resp => (this.studentInfo = resp.body)));
  }

  editStudent(data): Observable<any> {
    return this.httpClient.patch<any>(`${this.STUDENTURL}/1`, data);
  }
}
