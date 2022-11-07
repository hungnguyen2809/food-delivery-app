declare namespace Cart {
  interface CartItem {
    _id: string;
    foodId: string;
    userId: string;
    quantity: number;
    food: Restaurent.FoodRow;
  }

  interface CartMeta {
    itemsTotal?: number;
    discount?: number;
    grandTotal?: number;
  }
}
