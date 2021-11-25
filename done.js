let phrases = [", ты молодец!",
        ", получается здорово:)",
        ", ты сейчас на правильном пути!",
        ", хорошая работа",
        ", знал, что ты можешь сделать это",
        ", ты быстро учишься",
        ", совершенно!",
        ", неплохо",
        ", ты сделал это очень хорошо!",
        ", это твоя победа"]

module.exports = exports = function goodWork() {
  const done = phrases[ Math.floor( Math.random() * phrases.length )];
  return done;
}
