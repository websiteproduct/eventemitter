import { EventEmitter } from "node:events";

class MessageEmitter extends EventEmitter {}

const messenger = new MessageEmitter();

const sendMessage = (username, message) => {
  messenger.emit("message", { username, message });
};

const receiveMessage = (message) => {
  console.log("new message:", message);
};

messenger.on("message", receiveMessage);

sendMessage("kotee", "Hello Methed!");
sendMessage("websiteproduct", "events are interesting things");
sendMessage("The One", "follow the white rabbit");
