// const fs = require('fs');

// fs.writeFile('file/text.txt', 'Hey Abin', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('running');
// });


// fs.readFile('file/text.txt', 'utf8', (err,data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// const express = require('express');
// const app = express();

// // Middleware to simulate an error
// app.use((req, res, next) => {
//     const error = new Error('Something went wrong');
//     error.status = 500;
//     next(error);
// });

// // Error-handling middleware
// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.json({
//         error: {
//             message: err.message,
//         },
//     });
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
