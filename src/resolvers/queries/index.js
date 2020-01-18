module.exports = {
  city: async (_, { where }, { db: { city } }) => city.findAll({ where }),
  place: async (_, { where }, { db: { place } }) => {
    const places = await place.findAll({ where });
    return places;
  },
  comment: async (_, { where }, { db: { comment } }) => {
    const comments = await comment.findAll({ where });
    return comments;
  },
};