import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { ROUTES } from '../../constantes/routes';
import { Cv } from '../model/cv';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent implements OnInit {
  cv: Cv = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cvService.getCvById(+params.id).subscribe(
        (cv) => this.cv = cv,
        (erreur) => this.router.navigate([ROUTES.cv])
      );
    });
  }
  deleteCv() {
    this.cvService.deleteCv(this.cv).subscribe(
      (success) => {
        this.toaster.success(`le cv a supprimé avec succès`);
        this.router.navigate([ROUTES.cv]);
      },
      (erreur) => {
        console.log(erreur)
      }
    );


  }
}
