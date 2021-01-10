const pg = require('pg');

const config = {
    user: 'root',
    host: 'localhost',
    database: 'bmdb',
    port: 26257
}
const client = new pg.Client(config);
client.connect();

const GetNews = next => {
    client.query('SELECT * FROM news;', (err, results) => {
        if (err) {
            console.error('Error selecting from news: ', err);
            return next(err);
        }
        next(results.rows);
    });
}

const GetMaintenance = next => {
    client.query('SELECT * FROM maintenance;', (err, results) => {
        if (err) {
            console.error('Error selecting from maintenance: ', err);
            return next(err);
        }
        next(results.rows);
    });
}

const GetCommunity = next => {
    client.query(`SELECT author, title, description, encode('imageUrl', 'base64') as "imageUrl", encode("avatarUrl", 'base64') as "avatarUrl" FROM community;`, (err, results) => {
        if (err) {
            console.error('Error selecting from community: ', err);
            return next(err);
        }
        next(results.rows);
    });
}

exports.GetNews = GetNews;
exports.GetMaintenance = GetMaintenance;
exports.GetCommunity = GetCommunity;
