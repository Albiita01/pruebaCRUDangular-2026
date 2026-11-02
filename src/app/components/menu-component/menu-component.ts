import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent {

  private _service: AuthService = inject(AuthService);
  public usuario = this._service.user;

  logout(): void {
    this._service.logout();
  }
}
