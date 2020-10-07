import Bot from "@mirai-bot/core";
import { setConfig } from "@mirai-bot/config";

import { bootstrap } from "./bot.bootstrap";

setConfig("config.yml");
const bot = new Bot();
bot.register();
bootstrap(bot);
