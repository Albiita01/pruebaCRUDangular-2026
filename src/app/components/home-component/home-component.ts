import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Coche } from '../../models/Coche';
import { CocheService } from '../../services/coche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit {
  public coches!: Array<Coche>;

  constructor(
    private _service: CocheService,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) { }

  updateCoche(idCoche: number): void {
    this._router.navigate(['/update', idCoche]);
  }

  async loadCochesAsync(): Promise<void> {
    this.coches = await this._service.getAllCochesAsync();
    this._cdr.detectChanges();
  }

  async deleteCocheAsync(idCoche: number): Promise<void> {
    let response = await this._service.deleteCocheAsync(idCoche);
    await this.loadCochesAsync();
  }

  async deleteCocheConfirmAsync(idCoche: number): Promise<void> {
    this._router.navigate(["/delete", idCoche]);
  }

  async ngOnInit(): Promise<void> {
    await this.loadCochesAsync();

    // Esto si no tuviera el método de loadCoches, que lo tengo por el delete
    // this.coches = await this._service.getAllCochesAsync();
    // this._cdr.detectChanges();
  }
}
