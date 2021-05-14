const express = require("express");
const { addDiaryService } = require("../../../services/diaryService");

exports.addNewDiary= async (req, res, next) => {
  try {
    const { hashTag, location } = req.body.diaryTitleInfo;
    const userId = req.params.user_id

    const { newDiary } = await addDiary(hashTag, location, userId);

    return res.json({
        result: "ok",
        data: {
          _id: newDiary._id,
          date: newDiary.date,
          hashTag: newDiary.hashTag,
          location: newDiary.location,
          playList: newDiary.playList, // populate
        }
      })
  } catch (err) {
    next(err);
  }
}
