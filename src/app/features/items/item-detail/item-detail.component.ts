import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent implements OnInit {
  item: any = {};

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.getItem(id).subscribe((data: any) => {
      this.item = data;
    });
  }

  saveItem(): void {
    if (this.item.id) {
      this.apiService.updateItem(this.item.id, this.item).subscribe();
    } else {
      this.apiService.createItem(this.item).subscribe();
    }
  }
}
