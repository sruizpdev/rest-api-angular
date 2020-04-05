import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class ServiceService {
  constructor(private httpClient: HttpClient) {}
  getData() {
    return (
      this.httpClient.get('https://reqres.in/api/users?page=2').
      pipe(map((data) => data['data']))
    );

  }
}
