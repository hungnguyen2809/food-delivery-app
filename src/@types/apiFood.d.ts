declare namespace Food {
  interface FoodInfo {
    _id: string;
    id: string;
    restaurantId?: string;
    name?: string;
    price?: number;
    image?: string;
    category?: string;
    description?: string;
    ingredients?: string;
  }
}
