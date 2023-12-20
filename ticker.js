import { EventEmitter } from "node:events";

class TickerEmitter extends EventEmitter {}

const ticker = new TickerEmitter();

let tickCount = 1;

ticker.addListener("tick", (t) => {
  console.log(`Tick - ${t}`);
  tickCount++;
});

setInterval(() => {
  ticker.emit("tick", tickCount);
}, 1000);
