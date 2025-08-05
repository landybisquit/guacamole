import mediaGroup from 'telegraf-media-group';
import { Telegraf, Scenes, session } from "telegraf";
import { Mutex } from "async-mutex";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

try {
	await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log(">>[log] Connected to MongoDB Atlas");
} catch (err) {
	console.error(">>[error] MongoDB connection error:", err);
}
