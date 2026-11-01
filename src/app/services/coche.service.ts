import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Coche } from "../models/Coche";
import { firstValueFrom } from "rxjs";

@Injectable()
export class CocheService {

    url = environment.urlApiCoches;

    constructor(private _http: HttpClient) { }

    async getAllCochesAsync(): Promise<Coche[]> {
        try {
            let request = "api/Coches";
            return await firstValueFrom(this._http.get<Coche[]>(this.url + request));
        } catch (error) {
            console.log("Error al obtener los coches:", error);
            throw error;
        }
    }



    async createCocheAsync(coche: Coche): Promise<any> {
        try {
            let json = JSON.stringify(coche);
            let header = new HttpHeaders().set("content-type", "application/json");
            let request = "api/Coches/InsertCoche";
            return await firstValueFrom(this._http.post(this.url + request, json, { headers: header }));
        } catch (error) {
            console.log("Error al insertar un coche:", error);
            throw error;
        }
    }

    async findCocheAsync(idCoche: number): Promise<Coche> {
        try {
            let request = "api/Coches/FindCoche/" + idCoche;
            return await firstValueFrom(this._http.get<Coche>(this.url + request));
        } catch (error) {
            console.log("Error al buscar el coche con ID: " + idCoche + "\n", error);
            throw error;
        }
    }

    async updateCocheAsync(coche: Coche): Promise<any> {
        try {
            let json = JSON.stringify(coche);
            let header = new HttpHeaders().set("content-type", "application/json");
            let request = "api/Coches/UpdateCoche";
            return await firstValueFrom(this._http.put(this.url + request, json, { headers: header }));
        } catch (error) {
            console.log("Error al actualizar el coche:", error);
            throw error;
        }
    }

    async deleteCocheAsync(idCoche: number): Promise<any> {
        try {
            let request = "api/coches/deleteCoche/" + idCoche;
            return await firstValueFrom(this._http.delete<Coche>(this.url + request));
        } catch (error) {
            console.log("Error al eliminar el coche con ID: " + idCoche, error)
            throw error;
        }
    }

}