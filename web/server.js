import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send({body: 'first attempt'});
});

app.listen(3000, () => {
    console.log('server running at port: ' + 3000);
})