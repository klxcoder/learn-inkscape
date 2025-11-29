const fs = require('fs')

for (let i = 1; i <= 31; i++) {
  fs.mkdirSync(i.toString())
}
