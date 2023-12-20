import { EventEmitter } from "node:events";

class Ticker extends EventEmitter {}

const ticker = new Ticker();

let tickCount = 1;

ticker.addListener("tick", (t) => {
  console.log(`Tick - ${t}`);
  tickCount++;
});

setInterval(() => {
  ticker.emit("tick", tickCount);
}, 1000);
