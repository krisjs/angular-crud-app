import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from '../item.model';
import * as fromItems from '../state/items.reducer';
import * as ItemActions from '../state/items.actions';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items$: Observable<Item[]>;

  constructor(private store: Store<fromItems.State>) {
    this.items$ = store.select(state => state.items.items);
  }

  ngOnInit(): void {
    this.store.dispatch(ItemActions.loadItems());
  }

  deleteItem(id: number): void {
    this.store.dispatch(ItemActions.deleteItem({ id }));
  }
}
