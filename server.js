const mqtt = require('mqtt')

const uriConnection = 'mqtt://27.71.232.86:1111/'
const clientId = 'mqtt-explorer-e7ca42a5'
const client = mqtt.connect(uriConnection, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'solarpanels',
    password: 'FA643D54A18648F2',
    reconnectPeriod: 1000,
})
client.on('connect', function () {
    console.log('Connected')
    // Subscribe to a topic
    client.subscribe(['#', '$SYS/#'], [0, 0], function (err) {
        if (!err) {
            // Publish a message to a topic
            client.publish('test', 'Hello mqtt')
        }
    })
})
// Receive messages
client.on('message', function (topic, message) {
    // message is Buffer
    console.log(topic + ':' + message)
    console.log("===================================")
})
