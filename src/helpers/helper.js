import nodemailer from "node-mailer";
import axios from "axios";

import { SCREENSHOT_API_TOKEN } from "./../constants/credentials";

export const takeScreenshot = async () => {
  try {
    const query =
      "https://shot.screenshotapi.net/screenshot?token=FF6VVF3-921M3AC-PDXEN1G-1P0RXT2&url=https%3A%2F%2F73b4-180-94-33-62.ngrok.io&full_page=true&output=image&file_type=png&wait_for_event=load";
    const response = await axios.request({
      method: "GET",
      url: query,
      responseType: "arraybuffer",
      responseEncoding: "binary",
    });

    console.info("response: ", response);
  } catch (err) {
    console.error("Error while taking the screenshot");
    throw err;
  }
};

export const sendEmail = async () => {
  const username = "trycia.reinger37@ethereal.email";
  const password = "kKvXCVrf5eqznzGQK2";

  try {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Screenshot requested", // Subject line
      text: "Hello! find the screenshot that you requested attached", // plain text body
      html: "<b>Hello! find the screenshot that you requested attached</b>", // html body
    });
  } catch (err) {
    console.error("Error in sending the email");
    throw err;
  }
};
