import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe.model';
import { ReceipeService } from './receipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrl: './receipes.component.css',
  providers: [ReceipeService]
})
export class ReceipesComponent implements OnInit {

  receipe: Receipe;

  constructor(private receipeService: ReceipeService) {

  }

  ngOnInit(): void {
    this.receipeService.selectedReceipe.subscribe(
      (receipe: Receipe) => {
        this.receipe = receipe;
      }
    )
  }

  onReceipeSelected(receipe: Receipe) {
    console.log(receipe)
    this.receipe = receipe;
  }

}
