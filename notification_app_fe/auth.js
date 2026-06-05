const axios = require("axios");

async function auth() {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/auth",
      {
        email: "gururavutla@gmail.com",
        name: "Ravutla Guru Brahma Chari",
        rollNo: "23BQ1A12A5",
        accessCode: "QQdEYy",
        clientID: '1e6585e4-c315-447d-9850-850189516f23',
        clientSecret: 'CzFJgeCTJpvpJCaG'
      }
    );

    console.log(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

auth();