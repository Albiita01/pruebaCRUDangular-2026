import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CocheService } from '../../services/coche.service';
import { Coche } from '../../models/Coche';

@Component({
  selector: 'app-create-coche-component',
  standalone: false,
  templateUrl: './create-coche-component.html',
  styleUrl: './create-coche-component.css',
})
export class CreateCocheComponent {

  public mensaje!: string;
  @ViewChild("cajamarca") cajaMarca!: ElementRef<HTMLInputElement>;
  @ViewChild("cajamodelo") cajaModelo!: ElementRef<HTMLInputElement>;
  @ViewChild("cajaconductor") cajaConductor!: ElementRef<HTMLInputElement>;
  @ViewChild("cajaimagen") cajaImagen!: ElementRef<HTMLInputElement>;

  constructor(
    private _service: CocheService,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) { }

  private convertirBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  async insertCoche(): Promise<void> {
    const marca = this.cajaMarca.nativeElement.value;
    const modelo = this.cajaModelo.nativeElement.value;
    const conductor = this.cajaConductor.nativeElement.value;
    const imagen = this.cajaImagen.nativeElement.value;

    const coche: Coche = new Coche(0, marca, modelo, conductor, imagen);

    try {
      await this._service.createCocheAsync(coche);
      this._router.navigate(["/"]);
    } catch (error) {
      this.mensaje = "No se pudo guardar el coche";
      console.log(this.mensaje, error);
      this._cdr.detectChanges();
    }
  }
}