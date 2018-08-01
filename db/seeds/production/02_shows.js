
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('shows').del()
    .then(function () {
      // Inserts seed entries
      return knex("shows").insert([
        {
          id: "1",
          start_date_time: "2018-07-30 11:34",
          end_time: "2018-08-02 16:34",
          lat: "40.755977",
          lng: "-73.986988",
          location: "42nd St and 7th Ave.",
          details:
            "I'll be playing by the Union Street mural right before you exit onto 42nd",
          artist_id: "1"
        },
        {
          id: "2",
          start_date_time: "2018-08-03 14:00",
          end_time: "2018-08-03 17:00",
          lat: "40.757230",
          lng: "-73.989799",
          location: "Times Square, NYC",
          details:
            "I'm right in the center of Times Square near the walking path.",
          artist_id: "2"
        },
        {
          id: "3",
          start_date_time: "2018-08-04 14:00",
          end_time: "2018-08-04 19:00",
          lat: "45.646812",
          lng: "-84.474826",
          location: "NYC",
          details: "Test",
          artist_id: "3"
        }
      ]);
    });
};