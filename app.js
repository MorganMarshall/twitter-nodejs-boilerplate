import express from 'express'
import { TwitterApi } from 'twitter-api-v2'
const app = express()
//load your credentials
const apiKey = process.env['apiKey']
const apiSecret = process.env['apiKeySecret']
const accessToken = process.env['accessToken']
const accessTokenSecret = process.env['accessTokenSecret']
const bearerToken = process.env['bearerToken']

const client = new TwitterApi({
    appKey: apiKey,
    appSecret: apiSecret,
    accessToken: accessToken,
    accessSecret: accessTokenSecret,
    bearerToken:bearerToken,
});

const postTweet = async () => {

    try {

      await rwClient.v2.tweet("Your amazing tweet here! #nodejs #twitterapi")

      console.log("success")

    } catch (error) {

      console.error(error)

    }

};

const rwClient = client.readWrite;
//tweet
app.get('/postTweet', (req, res) => {
    postTweet()
});

app.listen(3000, () => {
  console.log('Express server initialized')
});