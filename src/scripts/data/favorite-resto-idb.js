import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const openIdb = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    // Code for upgrading the database goes here
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavRestoIdb = {
  // Get one restaurant
  async getResto(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return (await openIdb).get(OBJECT_STORE_NAME, id);
  },

  // Get all restaurants
  async getAllResto() {
    return (await openIdb).getAll(OBJECT_STORE_NAME);
  },

  // Put restaurant
  async putResto(resto) {
    // eslint-disable-next-line no-prototype-builtins
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return (await openIdb).put(OBJECT_STORE_NAME, resto);
  },
  // async putResto(resto) {
  //   return (await openIdb).put(OBJECT_STORE_NAME, resto);
  // },

  // Delete restaurant
  async deleteResto(id) {
    return (await openIdb).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavRestoIdb;
