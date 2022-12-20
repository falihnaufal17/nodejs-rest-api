const { postReservation } = require("../models/reservation.model");

const postData = async (req, res) => {
  const data = req.body;

  try {
    await postReservation(data);

    res.json({
      success: true,
      message: "success post data",
      data: data,
    });
  } catch (e) {
    res.status(400)

    res.json({
      success: false,
      message: e,
      data: data,
    });
  }
};

module.exports = { postData };
