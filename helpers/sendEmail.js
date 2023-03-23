const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "ulia.voitishenko@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;

// const nodemailer = require("nodemailer");
// require("dotenv").config();
// const { META_PASS } = process.env;

// const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "yuliya.khovrych@meta.ua",
//     pass: META_PASS,
//   },
// };
// const transporter = nodemailer.createTransport(nodemailerConfig);

// const sendEmail = async (data) => {
//     const email = { ...data, from: "yuliya.khovrych@meta.ua" };
//     await transporter.sendMail(email);
//     return true;
// };

// module.exports = sendEmail;
