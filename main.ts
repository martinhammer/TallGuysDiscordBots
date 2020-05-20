// Here's an example of how to use the built in command handler.
const commands = new discord.command.CommandGroup({
  defaultPrefix: '!' // You can customize your default prefix here.
});

commands.raw('date', (message) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var tod = "Today's date is " + dd + '/' + mm + '/' + yyyy;

  message.reply(tod);
});

commands.raw('time', (message) => {
  var today = new Date();
  var tm = today.toTimeString();
  var tmp = 'Current time is ' + tm;

  message.reply(tmp);
});

commands.raw('moo', (message) => {
  var moo = '``` \n';
  moo += '         (__) \n';
  moo += '         (oo) \n';
  moo += '   /------\\/ \n';
  moo += '  / |    ||   \n';
  moo += ' *  /\\---/\\ \n';
  moo += '    ~~   ~~   \n';
  moo += '...."Have you mooed today?"...```';

  message.reply(moo);
});

commands.raw('meow', (message) => {
  var meow = '```    \n';
  meow += "  ^~^  ,' \n";
  meow += " ('Y') )   \n";
  meow += ' /   \\/   \n';
  meow += '(\\|||/)   \n';
  meow += 'The cat says meow!```';
  message.reply(meow);
});

commands.raw('alien', (message) => {
  var foo = '```        \n';
  foo += '    o   o     \n';
  foo += '     )-(      \n';
  foo += '    (O O)     \n';
  foo += '     \\=/      \n';
  foo += '    .-"-.     \n';
  foo += '   //\\ /\\\\     \n';
  foo += ' _// / \\ \\\\_   \n';
  foo += '=./ {,-.} .=  \n';
  foo += '    || ||     \n';
  foo += '    || ||     \n';
  foo += '  __|| ||__   \n';
  foo += '  ---" "---   ```\n';
  message.reply(foo);
});

commands.raw('d20', (message) => {
  var result = Math.floor(Math.random() * 20 + 1);
  message.reply('You rolled ' + result);
});

commands.raw('d6', (message) => {
  var result = Math.floor(Math.random() * 6 + 1);
  message.reply('You rolled ' + result);
});
