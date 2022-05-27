import  { resolve, join } from 'path';
import fs from 'fs';
import http from 'http';
import events from 'events';


// const currentDir = path.resolve();
// const filePath = path.join(currentDir, 'package.json');

// fs.promises.readFile(filePath, 'utf8').then((text) => {
//     console.log(text);
// });


// const currentDir2 = path.resolve();
// const filePath2 = path.join(currentDir, 'hello.txt');

// fs.writeFile('hello1.txt', 'Hello!!!', (error) => {
 
//     if(error) {
//         throw error; 
//     }
//     console.log('It is an asynxronous code.');


//     const data = fs.readFileSync("hello1.txt", "utf8");
//     console.log(data); 
// });

// fs.promises.writeFile(filePath2, 'Welcome to my page!!!');

//console.log(fs.readFileSync('hello.txt', 'utf8'));




// http.createServer(function (req, res) {
//     fs.readFile('home.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
//   }).listen(8080);




// fs.appendFile('newFile1.txt', 'Hello content!',  (err) => {
//     if (err) throw err;
//     console.log('Saved!');
//   });



//   fs.open('newFile2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

//   fs.promises.appendFile('newFile1.txt', ' This is my text.').then((text) => {
//     console.log('Updated!');
//   });


//   fs.unlink('newFile2.txt',  (err) => {
//     if (err) throw err;
//     console.log('File deleted!');
//   });

//   fs.rename('newFile1.txt', 'renamedFile.txt',  (err) => {
//     if (err) throw err;
//     console.log('File Renamed!');
//   });






const myEventHandler = () => {
    console.log('I hear a scream!');
  }

const eventEmitter = new events.EventEmitter();
  
eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');

