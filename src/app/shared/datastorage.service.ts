import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReceipeService } from "../receipes/receipe.service";
import { Receipe } from "../receipes/receipe.model";
import { tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class DataStorgaeService {
  constructor(private http: HttpClient, private receipeService: ReceipeService) {

  }

  fetchReceipes() {
    return this.http.get<Receipe[]>('https://receipe-32e6c-default-rtdb.firebaseio.com/receipes.json').pipe(
      tap(
        response => {
          this.receipeService.setReceipe(response)
        }
      )
    )
  }

  saveReceipe() {
    const receipes = this.receipeService.getReceipe()
    this.http.put('https://receipe-32e6c-default-rtdb.firebaseio.com/receipes.json', receipes).subscribe();
  }
}