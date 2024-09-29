import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Item } from '../item.model';
import * as fromItems from '../state/items.reducer';
import * as ItemActions from '../state/items.actions';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item = { id: 0, name: '' };

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromItems.State>
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.store.select(state => state.items.items.find(i => i.id === id)).subscribe(item => {
        if (item) {
          this.item = item;
        }
      });
    }
  }

  saveItem(): void {
    if (this.item.id) {
      this.store.dispatch(ItemActions.updateItem({ item: this.item }));
    } else {
      this.store.dispatch(ItemActions.addItem({ item: this.item }));
    }
  }
}
