const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

const createCard = (tip) => {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card', 'mb-3', 'm-3');
    cardEl.setAttribute('key', tip.tip_id);

    const cardBodyEl = document.createElement('div');
        cardBodyEl.classList.add('card-body', 'bg-light', 'p-2');
        cardBodyEl.innerHTML = `<p>${tip.tip}</p>`;

    cardEl.appendChild(cardBodyEl);

    console.appendChild(cardEl);
};

module.exports = app;
