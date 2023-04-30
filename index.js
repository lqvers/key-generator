const crypto = require('crypto'),
  db = require('orio.db'),
  readline = require('readline').promises,
  colors = require('colors'),
  { stdin, stdout } = require('node:process'),
  rl = readline.createInterface({ input: stdin, output: stdout })

;(async () => {
  const amount = await rl.question('amount '.magenta.bold)

  for (var i = 0; i < amount; i++) {
    let key = crypto.randomBytes(11).toString('base64')

    if (db.has(`keys.${key}`) == true) {
      key = crypto.randomBytes(11).toString('base64')
    }

    db.push(`keys`, key)
    console.log(`${key}`.yellow.bold)
  }

  rl.close()
})()
