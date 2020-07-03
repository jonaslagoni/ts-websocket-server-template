import * as WebsocketConnections from './WebsocketConnections';
import * as SubscribeStruct from './structure/subscribe'
// create the server
import * as  WebSocket from 'ws';
import * as log from './Winston';
const moduleId = 'Websocket-Server';
const wsServer = new WebSocket.Server({
	verifyClient: (info: any, cb: CallableFunction) => {
		log.logInfo(`${moduleId}: Verifing client`);
		cb(true);
	},
	noServer: true
});
// WebSocket server
wsServer.on('error', (error: any) => {
	log.logError(`${moduleId}: Websocket error, ${JSON.stringify(error)}`);
});
wsServer.on('listening', () => {
	log.logInfo(`${moduleId}: Server is listening.`);
});
interface WebsocketServer {
	channels: any;
}
var exportObject: WebsocketServer = {
	channels: {}
};
{%- for channelName, channel in asyncapi.channels() %}
import * as {{ channelName | camelCase }} from "./channels/{{ channelName | camelCase }}";
exportObject.channels.{{ channelName | camelCase }} = {{ channelName | camelCase }};
{%- endfor %}
wsServer.on('connection', (connection: any, request: any) => {
	// Initialize the connection as alive
	connection.isAlive = true;
	//If pong recieved set the connection to still active
	connection.on('pong', () => {
		connection.isAlive = true;
	});
	log.logInfo(
		`${moduleId}: New connection, from  ${request.connection.remoteAddress}`
	);
	connection.uuid = WebsocketConnections.addNewConnection(connection);
	connection.on('close', () => {
		log.logInfo(
			`${moduleId}: A connection closed from ${request.connection.remoteAddress}`
		);

		// Remove the connection from the list.
		WebsocketConnections.removeConnection(connection.uuid);
	});
	connection.on('message', (data: any) => {
		const jsonData = JSON.parse(data);
		switch(jsonData.channel){
			case "unsubscribe":
				var subscribeMessage = new SubscribeStruct.default();
				subscribeMessage.copyInto(jsonData.message);
				switch(subscribeMessage.channel){
					{%- for channelName, channel in asyncapi.channels() %}
					case WebsocketConnections.Channel.{{ channelName | camelCase }}:
						//Check auth for unsubscribing to the channel? is that required or should we just remove the uuid?
						WebsocketConnections.unsubscribeToChannel(subscribeMessage.channel, connection.uuid);
						break;
					{%- endfor %}
				}
			break;
			case "subscribe":
				var subscribeMessage = new SubscribeStruct.default();
				subscribeMessage.copyInto(jsonData.message);
				switch(subscribeMessage.channel){
					{%- for channelName, channel in asyncapi.channels() %}
					case WebsocketConnections.Channel.{{ channelName | camelCase }}:
						//Check auth for subscribing to the channel 
						WebsocketConnections.subscribeToChannel(subscribeMessage.channel, connection.uuid);
						break;
					{%- endfor %}
				}
			break;
			{%- for channelName, channel in asyncapi.channels() %}
			{% if channel.hasPublish() %}
			{% if channel.publish().tags() | length == 0 or channel.publish().tags() | containsTag("client") %}
			case WebsocketConnections.Channel.{{ channelName | camelCase }}:
				var obj = new {{ channelName | camelCase }}.structure();
				obj.copyInto(jsonData.message);
				{{ channelName | camelCase }}.notify(obj);
				break;
			{%- endif %}
			{%- endif %}
			{%- endfor %}
			default:
				log.logError(`Message was not understood, message was: ${data}`)
				break;
		}
	});
});

/**
 * Remove connections if they are no longer alive or not sending pong.
 */
setInterval(() => {
	wsServer.clients.forEach((connection: any) => {
		if (connection.isAlive === false) {
			WebsocketConnections.removeConnection(connection.uuid);
			return connection.terminate();
		}
		//Reset the isAlive boolean for the pong to change this later.
		connection.isAlive = false;

		//Send ping command
		connection.ping(() => {});
	});
}, 30000);

export { exportObject };
