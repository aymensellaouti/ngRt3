import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { TwoComponent } from './components/two/two.component';
import { FirstComponent } from './components/first/first.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { SecondComponent } from './components/second/second.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { BackComponent } from './pages/back/back.component';
import { FrontComponent } from './pages/front/front.component';
import { LoginComponent } from './pages/login/login.component';

/*
  il prend le segment demandé
  => il chercher dans l ordre la première route qui match ce segment
*/
/* /cv/add
 */
const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'cv', component: CvComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cv/add', component: AddCvComponent },
  { path: 'cv/:id', component: DetailCvComponent },
  { path: 'todo', component: TodoComponent },
  {
    path: 'admin',
    component: BackComponent,
    children: [{ path: 'two', component: TwoComponent }],
  },
  {
    path: '',
    component: FrontComponent,
    children: [{ path: 'second', component: SecondComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
