import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrl: './receipe-list.component.css'
})
export class ReceipeListComponent implements OnInit {
  receipes: Receipe[] = [];

  constructor(private receipeService: ReceipeService,
    private router: Router,
    private route: ActivatedRoute

  ) {

  };

  ngOnInit() {
    this.receipeService.hasReceipeChanged.subscribe(
      (receipes: Receipe[]) => {
        this.receipes = receipes
      });
    this.receipes = this.receipeService.getReceipe();
  }

  onNavigate() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }
}
