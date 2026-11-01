import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Coche } from '../../models/Coche';
import { CocheService } from '../../services/coche.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-delete-coche-component',
  standalone: false,
  templateUrl: './delete-coche-component.html',
  styleUrl: './delete-coche-component.css',
})
export class DeleteCocheComponent implements OnInit {

  public coche!: Coche;
  public mensaje = "";

  // @ViewChild("cajaid") cajaId!: ElementRef;
  // @ViewChild("cajamarca") cajaMarca!: ElementRef;
  // @ViewChild("cajamodelo") cajaModelo!: ElementRef;
  // @ViewChild("cajaconductor") cajaConductor!: ElementRef;
  // @ViewChild("cajaimagen") cajaImagen!: ElementRef;

  constructor(
    private _service: CocheService,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
    private _activeRoute: ActivatedRoute
  ) { }

  // No le paso el idCoche porque con el activeRoute ya se lo paso en la url
  // Lo cojo con this.coche.idCoche y podría coger cualquiera de sus demás propiedades
  async confirmDeleteAsync(): Promise<void> {
    try {
      let idCoche = this.coche.idCoche;
      let response = await this._service.deleteCocheAsync(idCoche);
      this.mensaje = "Borrado con éxito.";
      this._cdr.detectChanges();
      setTimeout(() => {
        this._router.navigate(["/"]);
      }, 2000);
    } catch (error) {
      console.log("Error al borrar el coche con ID: " + this.coche.idCoche, error);
    }
  }

  cancelar() {
    this._router.navigate(["/"]);
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(async (params: Params) => {
      let id = parseInt(params['id']);
      this.coche = await this._service.findCocheAsync(id);
      this._cdr.detectChanges();
    });
  }
}
