import Emitter from "events";
import dotenv from "dotenv";

// dotenv.config();

const emitter = new Emitter();

emitter.on("message", (data, second, third) => {
    console.log("data", data);
    console.log("data", second);
    console.log("data", third);
});

const callback = (data, second, third) => {
    console.log("data", data);
    console.log("data", second);
    console.log("data", third);
};

emitter.once("message_once", callback);

const MESSAGE = process.env.message || "";

if (MESSAGE) {
    emitter.emit("message", MESSAGE, 123, 456);
} else {
    emitter.emit("message_once", "no-message", 321, 654);
}

emitter.removeAllListeners();
emitter.removeListener("message_once", callback);
