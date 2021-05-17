import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ROUTES } from 'src/app/constantes/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe(
      (data) => {
        localStorage.setItem('token', data['id']);
        this.router.navigate([ROUTES.cv]);
      },
      (erreur) => {
        this.toaster.error(`Veuillez vérifier vos credentials`);
        console.log(erreur);
      }
    );
  }
}
