import axios from "axios"

export const sendEmail = async (receiversEmail) => {
  const result = await axios.post("http://localhost:4000/send-screenshot", {
    receiversEmail,
  })

  console.info("result: ", result)
}
