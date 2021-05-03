import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  cvs: Cv[] = [];
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 12345, 38),
      new Cv(2, 'Khelifi', 'Bilel', 'ing', '', 12345, 21),
      new Cv(3, 'Mellakh', 'Insaf', 'ing', '                  ', 12346, 21),
    ];
  }
  getCvs(): Cv[] {
    return this.cvs;
  }

  getCvById(id: number): Cv {
    return this.cvs.find((cv) => cv.id === id);
  }

  deleteCv(cv: Cv) {
    const index = this.cvs.indexOf(cv);
    this.cvs.splice(index, 1);
  }
}
