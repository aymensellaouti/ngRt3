import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { HttpClient} from '@angular/common/http';
import { APIS } from '../../constantes/apis';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  cvs: Cv[] = [];
  constructor(private http: HttpClient) {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 12345, 38),
      new Cv(2, 'Khelifi', 'Bilel', 'ing', '', 12345, 21),
      new Cv(3, 'Mellakh', 'Insaf', 'ing', '                  ', 12346, 21),
    ];
  }
  getFakeCvs(): Cv[] {
    return this.cvs;
  }

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APIS.cv);
  }

  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APIS.cv + id);
  }

  deleteCv(cv: Cv): Observable<any> {
    /* const params = new HttpParams().set(
      'access_token',
      localStorage.getItem('token')
    ); */

    return this.http.delete<any>(APIS.cv + cv.id);
  }
}
