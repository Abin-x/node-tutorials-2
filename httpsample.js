// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req,res) => {
//     if(req.url === "/"){
//     fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf8', (err,data) => {
//         if(err) throw err;
//         res.writeHead(200, { "content-type": "text/html"});
//         res.end(data)
//     })
//     }

//     if(req.url === "/contact") {

//     fs.readFile(path.join(__dirname, 'views', 'contact.html'), 'utf8', (err,data) => {
//         if(err) throw err;
//         res.writeHead(200, { "content-type": "text/html"});
//         res.end(data)
//     })
//     }


// });

// const PORT = process.env.PORT || 3005;

// server.listen(PORT, () => console.log(`Server runnig on ${PORT}`));

// const http = require('http')
// const server = http.createServer((req,res) => {
//     res.end('Hey Abin')
// })

// server.listen(3005 , () => {
//     console.log('Seever running on port 3005');
// })

// const express = require('express')
// const app = express()

// app.get('/', (req,res) => {
//     res.send('Hey')
// })

// app.listen(3005, () => {
//     console.log('Server running on port 3005');
// })

// const express = require('express');
// const app = express();

// // Application-level middleware example
// app.use((req, res, next) => {
//   console.log('Time:', Date.now());
//   next();
// });

// // Route handler
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server running on port 3000')
// });


// const fs = require('fs');

// fs.readFile('file/text.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log(data);
// });

const fs = require('fs')

fs.readFile('file/text.txt', 'utf8', (err,data) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
})


