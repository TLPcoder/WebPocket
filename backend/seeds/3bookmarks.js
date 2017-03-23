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
              url:'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=5&cad=rja&uact=8&ved=0ahUKEwiH_fWdxuvSAhXqqlQKHRACCo8QFggzMAQ&url=http%3A%2F%2Fsanfrancisco.giants.mlb.com%2F&usg=AFQjCNH9rJ0q1HBxbEbnvokyhislUDojSA&sig2=sF4qMrCR2OF06lIGX1qslA&bvm=bv.150475504,d.cGw',
              created_at: new Date('2017-01-29 14:26:16 UTC'),
              updated_at: new Date('2017-01-29 14:26:16 UTC')
          },
          {
              category_id: 4,
              bookmark_name:'Curvball',
              url:'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiu36iuxuvSAhWJllQKHcWgBmcQFggaMAA&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCurveball&usg=AFQjCNEJOb6cCMzRzSmjhjdN7WoznmYkXA&sig2=6fbKr89Z0OMTrw3gVV9qqA&bvm=bv.150475504,d.cGw',
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
              url:'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=5&cad=rja&uact=8&sqi=2&ved=0ahUKEwinpcHLxuvSAhXhsVQKHRNvDk8QFgg0MAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHedge_fund&usg=AFQjCNHXa-FzEASfi0JXvNMKFIqXI96j9w&sig2=1q9BxSuO9NJr51Sog_-EgA&bvm=bv.150475504,d.cGw',
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
