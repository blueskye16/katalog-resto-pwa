/* eslint-disable no-undef */
// import LikeButtonPresenter from '../src/scripts/utils/like-button-presenter';
import FavRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unlike A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="like" id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavRestoIdb.deleteResto(1);
  });

  it('should display unlike widget when the movie has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurants"]'),
    ).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurants"]'),
    ).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurants"]').dispatchEvent(new Event('click'));

    expect(await FavRestoIdb.getAllResto()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unlike restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Mengahpus restaurant dari daftar restaurant yang disukai
    await FavRestoIdb.deleteResto(1);

    document.querySelector('[aria-label="unlike this restaurants"]').dispatchEvent(new Event('click'));
    expect(await FavRestoIdb.getAllResto()).toEqual([]);
  });
});
