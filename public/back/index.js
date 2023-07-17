import express from "express";
import pool from "./db";

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

app.get('/getSectionType', (req, res) => {
  pool.query(`SELECT id, title FROM cross_section_type`, (err, rows) => {
    if(err) console.log(err);
    res.set('Access-Control-Allow-Origin', '*');
    res.send(rows)
  })
})

app.get('/getSectionStandart', (req, res) => {
  pool.query(`SELECT * FROM cross_section_standart WHERE cross_section_type_id = ${req.query.id}`, (err, rows) => {
    if(err) console.log(err);
    res.set('Access-Control-Allow-Origin', '*');
    res.send(rows)
  })
})

app.get('/getSectionParameters', (req, res) => {
  pool.query(`SELECT * FROM cross_section_parameters WHERE id = ${req.query.id}`, (err, rows) => {
    if(err) console.log(err);
    res.set('Access-Control-Allow-Origin', '*');
    res.send(rows)
  })
})

app.get('/getMaterial', (req, res) => {
  pool.query(`SELECT * FROM cross_section_parameters WHERE id = ${req.query.id}`, (err, rows) => {
    if(err) console.log(err);
    res.set('Access-Control-Allow-Origin', '*');
    res.send(rows)
  })
})

app.get('/getMaterialPhysic', (req, res) => {
  pool.query('select * from material', (err, rows) => {
    if (err) console.log(err)
    res.set('Access-Control-Allow-Origin', '*');
    res.send(rows)
  })
})

