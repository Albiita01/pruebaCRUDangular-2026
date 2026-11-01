import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CreateCocheComponent } from './components/create-coche-component/create-coche-component';
import { UpdateCocheComponent } from './components/update-coche-component/update-coche-component';
import { DeleteCocheComponent } from './components/delete-coche-component/delete-coche-component';
import { LoginComponent } from './components/login-component/login-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "create", component: CreateCocheComponent },
  { path: "update", component: UpdateCocheComponent },
  { path: "update/:id", component: UpdateCocheComponent },
  { path: "delete", component: DeleteCocheComponent },
  { path: "delete/:id", component: DeleteCocheComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
