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
  } catch (err) {
    return { addDiaryServiceError: err };
  }
}

exports.orderDiaryByDateService = async (userId) => {
  try {
    const diaryByDate = await User.findOne({ id: userId }).populate({ path: "privateDiaryList", model: "Diary" }).sort({ "date": -1 }).lean();

    return { diaryByDate }
  } catch (err) {
    return { orderDiaryByDateServiceError: err }
  }
}

