import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CocheService } from '../../services/coche.service';
import { Usuario } from '../../models/Usuario';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent implements OnInit {

  // Lo pongo así y no public mensaje!: string para que el hueco del mensaje no se vea de primeras
  public mensaje = "";

  @ViewChild("cajauser") cajauser!: ElementRef;
  @ViewChild("cajapass") cajapass!: ElementRef;

  constructor(
    private _service: AuthService,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) { }

  async login(): Promise<void> {
    let userName = this.cajauser.nativeElement.value;
    let password = this.cajapass.nativeElement.value;
    let user = new Usuario(userName, password);

    let response = await this._service.createLogin(user);
    this.mensaje = "Login correcto";
    this._service.iniciarSesionAsync(response.response, user);
    this._cdr.detectChanges();
    setTimeout(() => {
      this._router.navigate(["/"]);
    }, 1500);
  }

  ngOnInit(): void {

  }
}
