const { addDiaryService, orderDiaryByDateService } = require("../../../services/diaryService");

exports.addNewDiary = async (req, res, next) => {
  try {
    const { hashTag, address, geoLocation } = req.body.newDiaryInfo;
    const userId = req.params.user_id;

    const { newDiary } = await addDiaryService(hashTag, address, geoLocation, userId);

    return res.json({
      result: "ok",
      data: {
        newDiary: {
          _id: newDiary._id,
          date: newDiary.date,
          hashTag: newDiary.hashTag,
          address: newDiary.address,
          geoLocation: newDiary.geoLocation,
          playList: newDiary.playList,
          energyScore: newDiary.energyScore,
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getDiaries = async (req, res, next) => {
  try {
    const userId = req.params.user_id;
    const { diariesByDate } = await orderDiaryByDateService(userId);

    return res.json({
      result: "ok",
      data: {
        diaries: diariesByDate.diaries,
      },
    });
  } catch (err) {
    next(err);
  }
};
