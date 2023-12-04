import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Receipe } from "./receipe.model";
import { DataStorgaeService } from "../shared/datastorage.service";

@Injectable({ providedIn: 'root' })
export class ReceipeResolverServer implements Resolve<Receipe[]> {

  constructor(private dataStorage: DataStorgaeService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataStorage.fetchReceipes();
  }

}