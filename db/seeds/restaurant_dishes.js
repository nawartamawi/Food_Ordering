exports.seed = function(knex, Promise) {
  const deleteTablePromise = Promise.all([
      knex('restaurants').del(),
      knex('clients').del(),
      knex('dishes').del(),
      knex('orders').del(),
      knex('order_quantity').del(),
    ]);
  return deleteTablePromise
    .then(function () {
      const insertDataPromise = Promise.all([
        knex('restaurants').insert({name: 'Maenam', address: '217 E Georgia Street', phone_number: '604-569-8192'}),
        knex('dishes').insert({name: 'Pad Thai', preptime: 45, img_url: 'http://i.imgsafe.org/25a5bf1c7c.jpg', price: 16, description: 'fresh rice noodles, tamarind, peanuts, tofu, egg, prawns'}),
        knex('dishes').insert({name: 'Massaman Curry of Braised Beef', preptime: 50, img_url: 'http://i.imgsafe.org/3b09797416.jpeg', price: 22, description: 'roasted peanut, potato confit, longan, roasted onion'}),
        knex('dishes').insert({name: 'Chicken Cashew Stirfry', preptime: 45, img_url: 'http://i.imgsafe.org/25a2b2c3f1.jpg', price: 19, description: 'fresh baby corn, green peppercorn, thai basil'}),
        knex('dishes').insert({name: 'Green Papaya Salad', preptime: 30, img_url: 'https://www.maangchi.com/wp-content/uploads/2011/12/mangosomtam1.jpg', price: 12, description: "long beans, carrots, garlic, roasted peanuts, bird's eye chilies, dried shrimp"}),
        knex('dishes').insert({name: 'Thai-style Tuna Ceviche', preptime: 35, img_url: 'https://cincinletseat.files.wordpress.com/2011/05/img_6250.jpg', price: 14, description: 'served on crackers, toasted rice powder, lemongrass, kaffir lime leaf'}),
        knex('dishes').insert({name: 'Tom Gati of Coconut and Chicken Soup', preptime: 35, img_url: 'http://i.imgsafe.org/3b0b4b5b33.jpg', price: 19, description: 'galangal, lemongrass, young coconut, variety of mushrooms, chili jam'}),
      ]);
      return insertDataPromise;
    });
};
