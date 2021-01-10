const express = require('express');
const app = express();
const port = 3001;
const postgres = require('./postgres');

app.get('/db/news', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    postgres.GetNews((err, rows) => {
        if (err) return res.send(err);
        res.send(rows)
    });
})

app.get('/db/maintenance', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    postgres.GetMaintenance((err, rows) => {
        if (err) return res.send(err);
        res.send(rows)
    });
})

app.get('/db/community', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    postgres.GetCommunity((err, rows) => {
        if (err) return res.send(err);
        res.send(rows)
    });
})


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
