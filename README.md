# AutoRestartBot
 A bot that restarts an OBS stream everyday at midnight

>[!IMPORTANT]
>The bot needs **Node.js** to work (https://nodejs.org/en)

# How to use the bot

1. Go to OBS > Tools > Websocket Server to activate the Websocket Server and change the configuration

2. Change the parameters inside **server.js** like the port in the url or the password for example

3. Open a terminal inside the folder and start the bot using the command : `npm start`

>[!NOTE]
>You can change the time at which the bot restarts the stream, e.g. 0 30 23 * * * = restart at 23:30
