// http server create
const http = require('http')

const app = http.createServer((req, res) => {
	res.end('Hey Abin GoodMorning')
})


// const PORT = process.env.PORT || 4008
app.listen(4008, () => {
	console.log('Server runnung on port 4008');
})

//express server create
// const express = require('express')
// const app = express()

// app.get('/', (req,res) => {
// 	res.send('MM haah!!')
// })

// const PORT = process.env.PORT || 4002
// app.listen(PORT, () => {
// 	console.log(`Server running on http://locahost:${PORT}`);
// })

//middleware
// const express = require('express')
// const app = express()

// app.use((req,res,next) => {
// 	console.log('middleware Executed');
//next();

// })

// app.get('/', (req,res) => {
// 	res.send('Hey')
// })

// const PORT = process.env.PORT || 3005
// app.listen(PORT, () => {
// 	console.log(`Server running on http://localhost:${PORT} `);
// })




// const express = require('express')
// const app = express

// app.get('/', (req,res) => {
//     res.send('Hey Abin')
    
// })

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// })


// const express = require('express')
// const app = express()

// app.get('/', (req,res) => {
// 	res.send('MM haah!!')
// })

// const PORT = process.env.PORT || 4002
// app.listen(PORT, () => {
// 	console.log(`Server running on http://locahost:${PORT}`);
// })


// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/error', (req, res, next) => {
//   // Create an error and pass it to the next middleware
//   const error = new Error('Something went wrong!');
//   error.status = 500;
//   next(error);
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.status || 500);
//   res.json({
//     error: {
//       message: err.message
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
