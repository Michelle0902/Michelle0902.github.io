import {
    get_items,
    add_item,
    update_item_title_by_id,
    delete_item_by_id,
    get_item_title_by_id
  } from './data.js';
import { test } from './data.js';

  test();
  
  add_item({ id: 1, title: "JavaScript Essentials" });
  add_item({ id: 2, title: "Learning HTML" });
  
  console.log(get_items()); 
  
  update_item_title_by_id(2, "Advanced HTML");
  console.log(get_item_title_by_id(2)); 
  
  delete_item_by_id(1);
  console.log(get_items()); 
