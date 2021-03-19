import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    res.send({body: 'first attempt'});
});

app.post('/hello', (req, res) => {
    const body = req.body;
    body.message = `Hello, ${body.name}`
    res.json(body);
});

app.listen(3000, () => {
    console.log('server running at port: ' + 3000);
})