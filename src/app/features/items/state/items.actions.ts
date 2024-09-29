import { createAction, props } from '@ngrx/store';
import { Item } from '../item.model';

export const loadItems = createAction('[Items] Load Items');
export const loadItemsSuccess = createAction('[Items] Load Items Success', props<{ items: Item[] }>());
export const loadItemsFailure = createAction('[Items] Load Items Failure', props<{ error: any }>());

export const addItem = createAction('[Items] Add Item', props<{ item: Item }>());
export const addItemSuccess = createAction('[Items] Add Item Success', props<{ item: Item }>());
export const addItemFailure = createAction('[Items] Add Item Failure', props<{ error: any }>());

export const updateItem = createAction('[Items] Update Item', props<{ item: Item }>());
export const updateItemSuccess = createAction('[Items] Update Item Success', props<{ item: Item }>());
export const updateItemFailure = createAction('[Items] Update Item Failure', props<{ error: any }>());

export const deleteItem = createAction('[Items] Delete Item', props<{ id: number }>());
export const deleteItemSuccess = createAction('[Items] Delete Item Success', props<{ id: number }>());
export const deleteItemFailure = createAction('[Items] Delete Item Failure', props<{ error: any }>());
