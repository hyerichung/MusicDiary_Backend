const express = require("express");
const { addDiaryService, orderDiaryByDateService } = require("../../../services/diaryService");

exports.addNewDiary = async (req, res, next) => {
  try {
    const { hashTag, location } = req.body.diaryTitleInfo;
    const userId = req.params.user_id

    const { newDiary } = await addDiaryService(hashTag, location, userId);

    return res.json({
      result: "ok",
      data: {
        newDiary: {
          _id: newDiary._id,
          date: newDiary.date,
          hashTag: newDiary.hashTag,
          location: newDiary.location,
          playList: newDiary.playList,
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getDiaryByDate = async (req, res, next) => {
  try {
    const userId = req.params.user_id;
    const { diaryByDate } = await orderDiaryByDateService(userId);

    return res.json({
      result: "ok",
      data: {
        diaryByDate: diaryByDate.privateDiaryList, // playlist populate
      },
    });
  } catch (err) {
    next(err);
  }
}
