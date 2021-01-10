const express = require('express');
const app = express();
const port = 3001;
const postgres = require('./postgres');
// require('https').globalAgent.options.ca = require('ssl-root-cas').create();

app.get('/db/news', (req, res) => {
    postgres.GetNews((err, rows) => {
        if (err) return res.send(err);
        res.send(rows)
    });
})

app.get('/db/maintenence', (req, res) => {
    postgres.GetMaintenence((err, rows) => {
        if (err) return res.send(err);
        res.send(rows)
    });
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
