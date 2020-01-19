module.exports = {
  city: async (_, { where }, { db: { city, place } }) =>  city.findAll({ where, include: place }),
  place: async (_, { where }, { db: { place, comment } }) => place.findAll({ where, include: comment }),
  comment: async (_, { where }, { db: { comment, place } }) => comment.findAll({ where }),
};