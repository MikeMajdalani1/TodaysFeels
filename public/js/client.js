const { TwitterApi } = require("twitter-api-v2");
require("dotenv").config();

//replace your API keys here
const client = new TwitterApi({
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

const getTweet = async () => {
  try {
    const result = await client.v2.get("tweets/search/recent", {
      query: "i feel", //modify this value to get other tweets not having "i feel inside"
      max_results: 10, //modify this value to get more tweets
    });
    for (let i = 0; i < result.data.length; i++) {
      console.log('"' + result.data[i].text.replace(/\n/g, " ") + '",');
    }
  } catch (e) {
    console.error(e);
  }
};
getTweet();
