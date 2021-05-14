const Diary = require("../models/Diary");
const User = require("../models/User");

exports.addDiaryService = async (hashTag, location, userId) => {
  try {
    const newDiary = await Diary.create({
      hashTag,
      location,
    });

    const addedUserPrivateDiary = await User.findOneAndUpdate({ id: userId }, { $push: { privateDiaryList: newDiary._id }}, {upsert: true, new: true})

    return { newDiary }
  } catch (error) {
    return { createDiaryError: error };
  }

}
