import axios from "axios";
import { useState } from "react";
const URL =
  "https://script.google.com/macros/s/AKfycbwimYQaeOFy6KrNRlFB5K4bk1bWw-EOm8w2_RWizIMEu8RxV_1mWXVldw6_Hgzu3YwGFA/exec";

export const formService = async (body) => {
  let formData = new FormData();

  console.log(formData, "test");
  try {
    const response = await axios.post(URL, {
      body,
      headers: {
        "Content-Type": "text/plain",
      },
      mode: "no-cors",
    });
    return response;
  } catch (error) {}
};
