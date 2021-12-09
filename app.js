const express = require('express');
const app = express();
const port = process.env.port || 3000;
const path = require('path')

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));  
app.use(express.static('public'));


//http://localhost:3000/
// app.get('/', (req,res) => {
//     res.send(`
//         <h1>good day</h1>
//         <div style='color:pink'>I love pink</div>
//         <div style='color:blue'>I love blue</div>
//     `);
// })
// app.get('/time', (req, res) => {
//     const date = new Date();
//     res.send(`
//         <h1>${date.toString()}</h1>
//     `)
// })
// app.get('/samplepage', (req, res) => {
//     let file = path.join(__dirname,'data','test.html')
//     console.log(file)
//     res.sendFile(file)
// })
app.post('/input', (req, res) => {
    res.send(`Thank you ${req.body.fname} we will send an email to ${req.body.email} shortly`)
})
app.listen(port, ()=> {
    console.log(`server is up. listening on port ${port}`);
})
