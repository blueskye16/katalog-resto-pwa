/* eslint-disable no-undef */
import { itActAsFavoriteRestaurantModel } from './contract/favoriteContract';
import FavRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavRestoIdb.getAllResto()).forEach(async (restaurant) => {
      await FavRestoIdb.deleteResto(restaurant.id);
    });
  });

  itActAsFavoriteRestaurantModel(FavRestoIdb);
});
