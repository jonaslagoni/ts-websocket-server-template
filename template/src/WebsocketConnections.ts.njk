
import * as uuidv1 from 'uuid/v1';
//For each channel
enum Channel {
{% set counter = 0 %}
{%- for channelName, channel in asyncapi.channels() %}
  {%- if counter+1 == asyncapi.channels() | length %}
  {{ channelName | camelCase }} = '{{ channelName | camelCase }}'
  {%- else %}
  {{ channelName | camelCase }} = '{{ channelName | camelCase }}',
  {%- endif %}
  {% set counter = counter+1 %}
{%- endfor %}
}
type channelConnection = Record<Channel, string[]>;
const channelConnections: channelConnection = {
{% set counter = 0 %}
{%- for channelName, channel in asyncapi.channels() %}
	{{ channelName | camelCase }}: []{%- if counter+1 != asyncapi.channels() | length %},{%- endif %}
	{% set counter = counter+1 %}
{%- endfor %}
};
let connections: any = {}



function addNewConnection(connection: any): string{
	const uuid = uuidv1();
	connections[uuid] = connection;
	return uuid;
}

/**
 * Add a connection to a channel
 * @param channel 
 * @param connection 
 */
function subscribeToChannel(channel: Channel, uuid: string): void {
	channelConnections[channel].push(uuid);
}

/**
 * Unsubscribe to a specific channel
 * @param channel 
 * @param uuid 
 */
function unsubscribeToChannel(channel: Channel, uuid: string): void {
	const index = channelConnections[channel].indexOf(uuid, 0);
	if (index > -1) {
		channelConnections[channel].splice(index, 1);
	}
}

/**
 * Remove connection
 * @param channel 
 * @param uuid 
 */
function removeConnection(uuid: string): void {
	const index = connections.indexOf(uuid, 0);
	if (index > -1) {
		connections.splice(index, 1);
	}
	for(const c of Object.keys(Channel)){
		unsubscribeToChannel(<Channel><unknown>c, uuid);
	}
	
}

/**
 * Get all the channelConnections for a specific channel
 * @param channel 
 */
function getchannelConnections(channel: Channel): any[] {
	return channelConnections[channel];
}

/**
 * Emits to all clients in a specific channel
 * @param channel The channel to send that message in
 * @param data 
 */
function emitMessageToClients(channel: Channel, data: any): void {
	let index;
	let channelConnections = getchannelConnections(channel);
	for (index in channelConnections) {
		if (channelConnections.hasOwnProperty(index)) {
			const uuid = channelConnections[index];
			const client = connections[uuid];
			if(client != null){
				emitMessageToClient(client, channel, data);
			}else{
				//remove client from all channels
				unsubscribeToChannel(channel, uuid);
			}
		}
	}
}

/**
 * Emit message to specific client
 * @param client 
 * @param channel 
 * @param data 
 */
function emitMessageToClient(client: any, channel: Channel, data: any) {
	//if open send message
	//if connecting try again in a min
	if (client.readyState === 1) {
		//Send json string format for now
		client.send(
			JSON.stringify({
				channel, 
				data
			})
		);
	} else if(client.readyState === 0){
		//Not possible to send data, timeout and try again
		setTimeout(() => {
			emitMessageToClient(client, channel, data);
		}, 3000);
	} else {
		//Ignore emitting to client since its closing
	}
}

export {
  addNewConnection,
  subscribeToChannel,
  unsubscribeToChannel,
  removeConnection,
  getchannelConnections,
  emitMessageToClients,
  Channel
}
