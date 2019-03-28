const fs = require ('fs');

fs.unlink('./html', (err) => {
  if (err) throw err;
  console.log('successfully deleted ./html'); 
});