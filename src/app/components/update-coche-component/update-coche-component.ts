import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Coche } from '../../models/Coche';
import { CocheService } from '../../services/coche.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-coche-component',
  standalone: false,
  templateUrl: './update-coche-component.html',
  styleUrl: './update-coche-component.css',
})
export class UpdateCocheComponent implements OnInit {

  public coche!: Coche;

  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajamarca") cajaMarca!: ElementRef;
  @ViewChild("cajamodelo") cajaModelo!: ElementRef;
  @ViewChild("cajaconductor") cajaConductor!: ElementRef;
  @ViewChild("cajaimagen") cajaImagen!: ElementRef;

  constructor(
    private _service: CocheService,
    private _cdr: ChangeDetectorRef,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) { }

  async updateCoche(): Promise<void> {
    let id = parseInt(this.cajaId.nativeElement.value);
    let marca = this.cajaMarca.nativeElement.value;
    let modelo = this.cajaModelo.nativeElement.value;
    let conductor = this.cajaConductor.nativeElement.value;
    let imagen = this.cajaImagen.nativeElement.value;

    let coche = new Coche(id, marca, modelo, conductor, imagen);

    let response = await this._service.updateCocheAsync(coche);
    this._router.navigate(['/']);
  }

  async ngOnInit(): Promise<void> {
    this._activeRoute.params.subscribe(async (params: Params) => {
      let id = parseInt(params['id']);
      this.coche = await this._service.findCocheAsync(id);
      this._cdr.detectChanges();
    })
  }
}
