import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {
  items: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getItems().subscribe((data: any[]) => {
      this.items = data;
    });
  }

  deleteItem(id: number): void {
    this.apiService.deleteItem(id).subscribe(() => {
      this.items = this.items.filter(item => item.id !== id);
    });
  }
}
