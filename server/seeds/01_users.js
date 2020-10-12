exports.seed = function(knex) {
  return knex("users").del()
    .then(function () {
      return knex("users").insert([
        {
          first_name: "Potato",
          last_name: "Fan",
          email: "potato@dog.com",
          phone: "090-7777-7777"
        },
        {
          first_name: "Bobby",
          last_name: "Boop",
          email: "b.boop@gmail.com",
          phone: "080-7777-7777"
        },
        {
          first_name: "Frog",
          last_name: "Green",
          email: "frog@green.com",
          phone: "070-7777-7777"
        },
        {
          first_name: "Rabbit",
          last_name: "Tanaka",
          email: "rabbit@tanaka.com",
          phone: "070-7777-7777"
        },
        {
          first_name: "Lion",
          last_name: "KUdoh",
          email: "lion@kudoh.com",
          phone: "070-7777-7777"
        },
        {
          first_name: "Turtle",
          last_name: "Katoh",
          email: "turtle@katoh.com",
          phone: "070-7777-7777"
        },
        {
          first_name: "Tuna",
          last_name: "Itho",
          email: "tuna@itoh.com",
          phone: "070-7777-7777"
        }
      ]);
    });
};
