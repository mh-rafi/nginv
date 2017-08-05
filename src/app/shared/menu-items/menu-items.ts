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
      {state: 'list', name: 'Vendor List'},
      {state: 'add', name: 'Add New Vendor'}
    ]
  }, {
    state: 'purchase-order',
    name: 'PO',
    type: 'sub',
    icon: 'add_shopping_cart',
    badge: [],
    children: [
      {state: 'list', name: 'PO List'},
      {state: 'add', name: 'Add New PO'}
    ]
  },
  {
    state: 'inventory',
    name: 'Inventory',
    type: 'sub',
    icon: 'archive',
    badge: [],
    children: [
      {state: 'product-list', name: 'Product List'},
      {state: 'product-add', name: 'Add New Product'}
    ]
  },
  {
    state: 'sales-order',
    name: 'SO',
    type: 'sub',
    icon: 'shopping_cart',
    badge: [],
    children: [
      {state: 'list', name: 'SO List'}
    ]
  },
  {
    state: 'customer',
    name: 'Customer',
    type: 'sub',
    icon: 'group',
    badge: [],
    children: [
      {state: 'list', name: 'Cutomer List'},
      {state: 'add', name: 'Add New Cutomer'}
    ]
  },
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