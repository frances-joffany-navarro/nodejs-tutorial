const { readFile, writeFile } = require('fs')

//callback - run that callback when we are done (whatever functionality we did is done)

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  /* console.log(result); */
  //if we don't provide a utf coding
  // result : <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65
  const first = result

  readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return
    }
    const second = result

    writeFile('./content/result-sync.txt', `Hear is the result: ${first}, ${second}`, (err, result) => {
      if(err) {
        console.log(err);
        return
      }
      console.log('done with this task');
    })
  })
})
console.log('starting the next one');
