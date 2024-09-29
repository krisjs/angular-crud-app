import { createReducer, on } from '@ngrx/store';
import { Item } from '../item.model';
import * as ItemActions from './items.actions';

export interface State {
  items: Item[];
  error: string | null;
}

export const initialState: State = {
  items: [],
  error: null
};

export const itemsReducer = createReducer(
  initialState,
  on(ItemActions.loadItemsSuccess, (state, { items }) => ({
    ...state,
    items,
    error: null
  })),
  on(ItemActions.loadItemsFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(ItemActions.addItemSuccess, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
    error: null
  })),
  on(ItemActions.addItemFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(ItemActions.updateItemSuccess, (state, { item }) => ({
    ...state,
    items: state.items.map(i => (i.id === item.id ? item : i)),
    error: null
  })),
  on(ItemActions.updateItemFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(ItemActions.deleteItemSuccess, (state, { id }) => ({
    ...state,
    items: state.items.filter(i => i.id !== id),
    error: null
  })),
  on(ItemActions.deleteItemFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
