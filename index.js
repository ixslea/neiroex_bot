

TeleBot = require('telebot');
const token = '1990816736:AAEFGrgLv7MHPRyETyM8h4e32Ldk09Om6v0'
const bot = new TeleBot({
    token: token,
    usePlugins: ['commandButton']

});
require("@babel/core").transformSync("code", {
  plugins: ["@babel/plugin-proposal-export-default-from"],
});

var exersise = require('./ex.js');
var goodWork = require('./done.js')
var method = require('./method.js')



bot.on(['/start', '/help'], async msg => {
    const chatId = msg.chat.id;

    await bot.sendMessage(chatId, 'Добро пожаловать!');
    let replyMarkup = bot.keyboard([
        ['/нейробика', '/упражнение']
    ], {resize: true});

    await bot.sendMessage(msg.from.id, 'Используй команды: \n', {replyMarkup});

  })





bot.on('/нейробика', msg => {

    return bot.sendMessage(msg.from.id, 'Это методика развития мозга ' + method());
});

bot.on('/упражнение', async msg  => {
    const chatId = msg.id;
    await bot.sendMessage(msg.from.id, 'Ваше упражнение на сегодня: ');
    await bot.sendMessage(msg.from.id, exersise());


    const replyMarkup = bot.inlineKeyboard([
        [bot.inlineButton('Я выполнил!🥖', {callback: '/done'})],
        [bot.inlineButton('Хочу другое упражнение 🦔', {callback: '/another'})],
    ], {resize: true});
    await bot.sendMessage(msg.from.id, 'Выполнили?', {replyMarkup});



});

bot.on('/another', async msg => {

  const chatId = msg.id;

  await bot.sendMessage(msg.from.id,  exersise());
  const replyMarkup = bot.inlineKeyboard([
      [bot.inlineButton('Я выполнил!🥖', {callback: '/done'})],
      [bot.inlineButton('Хочу другое упражнение🦔', {callback: '/another'})]
  ]);
  await bot.sendMessage(msg.from.id, 'Выполнили?', {replyMarkup});


})



bot.on('/done', async msg => {

    const name = msg.from.first_name;
    return bot.sendMessage(msg.from.id, name + goodWork());

});







bot.start();
