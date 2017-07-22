import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'home',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  },
  {
    state: 'vendor',
    name: 'VENDOR',
    type: 'sub',
    icon: 'apps',
    badge: [],
    children: [
      {state: 'list', name: 'LIST'},
      {state: 'add', name: 'ADD'}
    ]
  }, {
    state: 'purchase-order',
    name: 'PO',
    type: 'sub',
    icon: 'shopping_cart',
    badge: [],
    children: [
      {state: 'list', name: 'LIST'},
      {state: 'add', name: 'ADD'}
    ]
  },
  {
    state: 'product',
    name: 'PRODUCT',
    type: 'sub',
    icon: 'archive',
    badge: [],
    children: [
      {state: 'list', name: 'LIST'}
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}