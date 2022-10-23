declare namespace Restaurent {
  interface RestaurentRow {
    _id: string;
    id: string;
    images: {
      logo: string;
      poster: string;
      cover: string;
    };
    name: string;
    type: string;
    tags: string[];
    location: string;
    distance: number;
    time: number;
    categories: string[];
  }

  interface FoodRow {
    id?: string;
    restaurantId?: string;
    name?: string;
    price?: number;
    image?: string;
    category?: string;
    description?: string;
    ingredients?: string;
  }

  type RestaurentFood = RestaurentRow & {foods: FoodRow[]};
}
