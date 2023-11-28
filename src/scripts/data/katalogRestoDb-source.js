import API_ENDPOINT from '../globals/api-endpoint';

class KatalogRestoDbSource {
  static async homeRestoKatalog() {
    const response = await fetch(API_ENDPOINT.HOME_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restoDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));

    return response.json();
  }
}

export default KatalogRestoDbSource;
