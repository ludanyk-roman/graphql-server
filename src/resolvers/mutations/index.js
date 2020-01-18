module.exports = {
  insertCity: async (_, { set }, { db: { city } }) => city.create({ ...set }),
  updateCity: async (_, { set, where }, { db: { city } }) => city.update({ ...set }, { where }),
  deleteCity: async (_, { where }, { db: { city } }) => city.destroy({ where }),

  insertPlace: async (_, { set }, { db: { place } }) => place.create(set),
  updatePlace: async (_, { set, where }, { db: { place } }) => place.update({ ...set }, { where }),
  deletePlace: async (_, { where }, { db: { place } }) => place.destroy({ where }),

  insertComment: async (_, { set }, { db: { comment } }) => comment.create(set),
  updateComment: async (_, { set, where }, { db: { comment } }) => comment.update({ ...set }, { where }),
  deleteComment: async (_, { where }, { db: { comment } }) => comment.destroy({ where }),
}