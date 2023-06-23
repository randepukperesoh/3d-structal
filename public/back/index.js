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

// pool.query("select * FROM Sortament", (err, res) => {
//     if(err) console.log(err);
//     //console.log(res)
//     //res.send()
// })

//const defaultsMaterials = [
//  {title: lang('Сталь углеродистая'), E: 200e9, nu: 0.5, ro: 7850, gamma: 7850 * 9.80666, sigmaMax: 240, tauMax: 140, overload: 5, measures: { ro: 'k_g/m^3', gamma: 'N/m^3', E: 'Pa' }, rY: 240, rYn: 245, rU: 360},
//  {title: lang('Сталь высокопрочная'), E: 210e9, nu: 0.3, ro: 7580, gamma: 7580 * 9.80666, sigmaMax: 240, tauMax: 140, overload: 5, measures: { ro: 'k_g/m^3', gamma: 'N/m^3', E: 'Pa' }},
//  {title: lang('Медь (прокат)'), E: 110e9, nu: 0.31, ro: 8960, gamma: 8960 * 9.80666, sigmaMax: 240, tauMax: 140, overload: 5, measures: { ro: 'k_g/m^3', gamma: 'N/m^3', E: 'Pa' }},
//  {title: lang('Алюминий (прокат)'), E: 69e9, nu: 0.32, ro: 2680, gamma: 2680 * 9.80666, sigmaMax: 240, tauMax: 140, overload: 5, measures: { ro: 'k_g/m^3', gamma: 'N/m^3', E: 'Pa' }},
//  {title: lang('Цинк (прокат)'), E: 84e9, nu: 0.27, ro: 7130, gamma: 7130 * 9.80666, sigmaMax: 240, tauMax: 140, overload: 5, measures: { ro: 'k_g/m^3', gamma: 'N/m^3', E: 'Pa' }},
//];