/**
 * Arquivo: app.js
 * Descrição: Arquivo responsável por executar a aplicação e levantar o servidor
 * local.
 * Data: 11/05/2020
 * Author: Rafaella
 */

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('App - Intro Star Wars');
});

app.listen(3000, () => console.log('Aplicação executando na porta 3000!'));