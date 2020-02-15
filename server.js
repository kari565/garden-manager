const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('dist/gardener-atalante'));

app.get('/*', (request, response) => {
	response.sendFile(path.join('dist/gardener-atalante', 'index.html'));
});

app.listen(process.env.PORT || 8080);