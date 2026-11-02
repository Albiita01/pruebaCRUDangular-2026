import { Injectable, signal } from "@angular/core";
import { Usuario } from "../models/Usuario";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable()
export class AuthService {

    url = environment.urlApiAuth;

    constructor(private _http: HttpClient) { }

    async createLogin(user: Usuario): Promise<any> {
        try {
            let request = "auth/login";
            let json = JSON.stringify(user);
            let header = new HttpHeaders().set("content-type", "application/json");
            return await firstValueFrom(this._http.post(this.url + request, json, { headers: header }));
        } catch (error) {
            console.log("Error al loguear al usuario", error);
            throw error;
        }
    }

    public user = signal<Usuario | null>(null);

    // Este método lo he hehcho guardando el token y pasándole los datos del usuario logeado al signal
    // No es async porque no hace ninguna petición a la API
    iniciarSesionAsync(token: string, datosUser: Usuario): void {
        sessionStorage.setItem("TOKEN", token);
        this.user.set(datosUser);
    }

    logout(): void {
        sessionStorage.removeItem("TOKEN");
        this.user.set(null);
    }


}