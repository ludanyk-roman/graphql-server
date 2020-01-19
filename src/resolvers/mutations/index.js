module.exports = {
  insertCity: async (_, { set }, { db: { city } }) => city.create({ ...set }),
  updateCity: async (_, { set, where }, { db: { city } }) => { 
    await city.update({ ...set }, { where });
    return city.findOne({ where });
  },
  deleteCity: async (_, { where }, { db: { city } }) => {
    const cityToBeDeleted = await city.findOne({ where });
    await city.destroy({ where });
    return cityToBeDeleted;
  },

  insertPlace: async (_, { set }, { db: { place } }) => place.create(set),
  updatePlace: async (_, { set, where }, { db: { place } }) => { 
    await place.update({ ...set }, { where });
    return place.findOne({ where });
  },
  deletePlace: async (_, { where }, { db: { place } }) => {
    const placeToBeDeleted = await place.findOne({ where });
    await place.destroy({ where });
    return placeToBeDeleted;
  },

  insertComment: async (_, { set }, { db: { comment } }) => comment.create(set),
  updateComment: async (_, { set, where }, { db: { comment } }) => {
    await comment.update({ ...set }, { where });
    return comment.findOne({ where });
  },
  deleteComment: async (_, { where }, { db: { comment } }) => {
    const commentToBeDeleted = await comment.findOne({ where });
    await comment.destroy({ where });
    return commentToBeDeleted;
  },
}