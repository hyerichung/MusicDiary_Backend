const express = require("express");

exports.createDiary = async (req, res, next) => {
  try {
    const diaryTitleInfo = req.body.diaryTitleInfo;
    const userId = req.params.user_id

  } catch (err) {
    next(err);
  }
}
