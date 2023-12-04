import { Component, Input } from '@angular/core';
import { Receipe } from '../../receipe.model';
import { ReceipeService } from '../../receipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrl: './receipe-item.component.css'
})
export class ReceipeItemComponent {
  @Input() receipe: Receipe
  @Input() index: number;

  constructor(private receipeService: ReceipeService) {

  }
}
