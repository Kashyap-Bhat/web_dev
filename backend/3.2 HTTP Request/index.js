import express from 'express';

const app = express();
const port = 3000;

app.get('/',(req, res) =>{
    res.send('<h1>Hello World</h1>');
})
app.get('/Contact',(req, res) => {
    res.send('<p>phone : 7259550132 \nmail : kashbhat2004@gmail.com</p>');
})

app.get('/About',(req, res) => {
    res.send('<p>Fullstack Developer</p>');
})

app.listen(port, ()=>{
    console.log(`the server is running at port ${port}.`);
}); 