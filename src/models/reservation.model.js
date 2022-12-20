const { connection } = require("../configs/db");

const postReservation = (data) => {
  const { product_name, message } = data;
  return new Promise((resolve, reject) => {
    connection.execute(
      "INSERT INTO reservation (product_name, message) VALUES (?, ?)",
      [product_name, message],
      (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      }
    );
  });
};

module.exports = { postReservation };
