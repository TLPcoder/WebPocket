"use strict";
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bookmark').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookmark').insert([
          {
              category_id: 1,
              bookmark_name:'React/Redux',
              url:'https://css-tricks.com/learning-react-redux/',
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_id: 1,
              bookmark_name:'Django',
              url:'https://www.djangoproject.com/',
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_id: 2,
              bookmark_name:'Golf Now',
              url:'https://www.golfnow.com',
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_id: 2,
              bookmark_name:'Inside Out Gold Swing',
              url:'http://golftips.golfweek.com/come-inside-golf-swing-20343.html',
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_id: 3,
              bookmark_name:'Supercharger',
              url:'https://en.wikipedia.org/wiki/Supercharger',
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_id: 3,
              bookmark_name:'Turbocharger',
              url:'https://en.wikipedia.org/wiki/Turbocharger',
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_id: 4,
              bookmark_name:'Giants',
              url:'http://sanfrancisco.giants.mlb.com/index.jsp?c_id=sf',
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_id: 4,
              bookmark_name:'Curvball',
              url:'https://en.wikipedia.org/wiki/Curveball',
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_id: 5,
              bookmark_name:'Stocks',
              url:'http://money.cnn.com/data/markets/',
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_id: 5,
              bookmark_name:'Hedge Fund',
              url:'https://en.wikipedia.org/wiki/Hedge_fund',
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_id: 6,
              bookmark_name:'GTI Chips',
              url:'https://www.ecstuning.com/b-apr-parts/stage-2-performance-software-upgrade-new-customer/mk718tstg2kt/?gclid=CjwKEAjwwcjGBRDj-P7TwcinyBkSJADymblTFHu59TMLXdA7r6umOP8kttS9k_M3a9RpcNRvMyMtQxoCu7fw_wcB',
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_id: 6,
              bookmark_name:'GTI Exhaust',
              url:'https://www.ecstuning.com/b-cts-parts/3-high-flow-cat-back-exhaust/ctsexhcb0007~cts/?gclid=CjwKEAjwwcjGBRDj-P7TwcinyBkSJADymblTnvzzeB5HUUXcID05xx_WkSrpGynyGZC8HRTfu7lbnRoC1Nnw_wcB',
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          }
      ]);
    });
};
