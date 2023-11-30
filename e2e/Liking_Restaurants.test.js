/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Liking and Unlike Restaurant', ({ I }) => {
  // Masuk ke home page
  I.seeElement('#mainContent');
  I.seeElement('.list-resto');

  // Mengklik salah satu item restoran dan mengklik tombol like
  I.click(locate('.resto-item').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Beralih ke halaman favorit dan melihat restoran yang telah disukai
  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  // Mengklik restoran yang disukai lalu mengkliknya untuk batal menyukai
  I.click(locate('.resto-item').first());
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  console.log('Liking and Unlike Test Succed');
});
