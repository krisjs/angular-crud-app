import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../../core/api.service';
import * as ItemActions from './items.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ItemsEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadItems),
      mergeMap(() =>
        this.apiService.getItems().pipe(
          map(items => ItemActions.loadItemsSuccess({ items })),
          catchError(error => of(ItemActions.loadItemsFailure({ error })))
        )
      )
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.addItem),
      mergeMap(action =>
        this.apiService.createItem(action.item).pipe(
          map(item => ItemActions.addItemSuccess({ item })),
          catchError(error => of(ItemActions.addItemFailure({ error })))
        )
      )
    )
  );

  updateItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.updateItem),
      mergeMap(action =>
        this.apiService.updateItem(action.item.id, action.item).pipe(
          map(item => ItemActions.updateItemSuccess({ item })),
          catchError(error => of(ItemActions.updateItemFailure({ error })))
        )
      )
    )
  );

  deleteItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.deleteItem),
      mergeMap(action =>
        this.apiService.deleteItem(action.id).pipe(
          map(() => ItemActions.deleteItemSuccess({ id: action.id })),
          catchError(error => of(ItemActions.deleteItemFailure({ error })))
        )
      )
    )
  );
}
