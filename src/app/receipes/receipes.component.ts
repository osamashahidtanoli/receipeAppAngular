import { Component, OnInit } from '@angular/core';
import { DataStorgaeService } from '../shared/datastorage.service';
@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrl: './receipes.component.css',
  providers: []
})
export class ReceipesComponent implements OnInit {

  constructor(private dataStorage: DataStorgaeService) {

  }

  ngOnInit(): void {
    this.dataStorage.fetchReceipes().subscribe();
  }

}
