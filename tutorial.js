if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}
const { IncomingWebhook, WebClient } = require('@slack/client')
const timeNotification = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL)
const currentTime = new Date().toTimeString()
timeNotification.send(`The current time is ${currentTime}`, (error, resp) => {
    if(error) {
        return console.error(error)
    }
    console.log('Notification Sent')
})
console.log('Getting started...')