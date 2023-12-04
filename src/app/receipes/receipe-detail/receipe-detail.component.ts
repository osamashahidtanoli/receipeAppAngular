import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrl: './receipe-detail.component.css'
})
export class ReceipeDetailComponent implements OnInit {
  receipe: Receipe;
  id: number;

  constructor(private receipeService: ReceipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = Number(params['id']);
          this.receipe = this.receipeService.getASingleReceipe(this.id);
        }
      )
  }

  AddIngredientToShoppoingList() {
    this.receipeService.addIngredientToShoppoingList(this.receipe.ingredients);
  }

  onNavigate() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

  onDelete() {
    this.receipeService.deleteReceipe(this.id);
    this.router.navigate(['/receipes']);
  }
}
