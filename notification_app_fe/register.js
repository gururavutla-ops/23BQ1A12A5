const axios = require("axios");

async function register() {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/register",
      {
        email: "gururavutla@gmail.com",
        name: "Ravutla Guru Brahma Chari",
        mobileNo: "9441802114",
        githubUsername: "gururavutla-ops",
        rollNo: "23BQ1A12A5",
        accessCode: "QQdEYy"
      }
    );

    console.log(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

register();