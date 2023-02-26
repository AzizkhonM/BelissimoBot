require("dotenv").config()
const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(

    (ctx) => {

        console.log(ctx);

        ctx.replyWithHTML("<b>🤖 Salom! Men Aziz Marketning qo‘llab-quvvatlash botiman. Sizga yordam bermoqchiman!\nQaysi tilda javob berasiz?\n\n🤖 Здравствуйте! Я бот поддержки Aziz Market. Хочу вам помочь!\nНа каком языке вам отвечать?\n\n🤖 Hello! I am an Aziz Market support bot. I want to help you!\nWhat language do you need to respond in?</b>", Markup.inlineKeyboard([
			Markup.button.callback("UZB 🇺🇿", "UZB 🇺🇿"),
            Markup.button.callback("RUS 🇷🇺", "RUS 🇷🇺"),
			Markup.button.callback("ENG 🇬🇧", "ENG 🇬🇧"),
		]))
        
    }

)


bot.on("callback_query", (ctx) => {


})



bot.on()


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));