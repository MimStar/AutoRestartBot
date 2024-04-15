// Need to install the following packages: obs-websocket-js, node-cron

const OBSWebSocket = require('obs-websocket-js').default;
const cron = require('node-cron');

const obs = new OBSWebSocket();

obs.connect('ws://localhost:4455', 'password').then(() => {
    console.log(`Success! We're connected & authenticated.`);
    //cron schedule to restart stream every day at 00:00:00 (seconds:minutes:hours)
    cron.schedule('0 0 0 * * *', async () => {
        await obs.call('StopStream');
        await new Promise(resolve => setTimeout(resolve, 1000));
        await obs.call('StartStream');
    });
}).catch(err => {
    console.log(`Error! We're not connected & authenticated.`, err);
});