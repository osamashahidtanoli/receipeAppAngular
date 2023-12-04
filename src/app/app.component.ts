import { Component, OnInit } from '@angular/core';
import { DataStorgaeService } from './shared/datastorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'receipe-app';
  loaded = 'receipe';

  constructor(private dataStorage: DataStorgaeService) {

  }

  ngOnInit(): void {
    this.dataStorage.fetchReceipes().subscribe();
  }

  onNavigate(feature: string) {
    this.loaded = feature;
  }
}
