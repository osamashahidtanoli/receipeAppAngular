import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrl: './receipe-list.component.css'
})
export class ReceipeListComponent implements OnInit {
  receipes: Receipe[] = [];

  constructor(private receipeService: ReceipeService) {

  };

  ngOnInit() {
    this.receipes = this.receipeService.getReceipe();
  }
}
