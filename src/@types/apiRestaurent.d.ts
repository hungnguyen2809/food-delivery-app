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
}
