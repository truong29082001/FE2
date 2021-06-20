const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const  mysql = require('mysql');
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'frontend',
});
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res) => {
    const sql = "SELECT * FROM sanpam;"
    connection.query(sql, function(err, results) {
        if (err) throw err;
        res.json({sanpham: results});
      });

});

app.listen(3002, () => console.log('App listening on port 4000'));