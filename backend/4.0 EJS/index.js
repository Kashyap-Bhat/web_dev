import express from 'express';

const app = express();
const port = 3000;
const today = new Date();
const dayNo = today.getDay();
var day = "";

function getWeek(){
    if(dayNo < 1 || dayNo > 5){
        day = "Weekend";
    }else{
        day = "Weekday";
    }
}

getWeek();

app.get('/', (req, res) => {
        res.render('index.ejs',
        {week: day});
})

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})