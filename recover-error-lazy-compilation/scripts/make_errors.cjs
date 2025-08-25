const fs = require('node:fs')
const path = require('node:path')

const filePath = path.resolve(__dirname, '../src/App.tsx')

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err)
    return
  }

  // Introduce a syntax error
  const modified = data.replace('<p>Start building amazing things with Rsbuild.</p>', '<p>Start building amazing things with Rsbuild.</p')

  fs.writeFile(filePath, modified, (err) => {
    if (err) {
      console.error('Error writing file:', err)
    }
  })
})
