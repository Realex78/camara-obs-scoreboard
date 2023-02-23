const express = require('express')
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static("res"))

const data = { visible: true, title: null, team1: null, score1: null, team2: null, score2: null };

app.post('/api', function (req, res) {
	console.log(req.body);
	data.visible = req.body.visible;
	data.title = req.body.title;
	data.team1 = req.body.team1;
	data.score1 = req.body.score1;
	data.team2 = req.body.team2;
	data.score2 = req.body.score2;
	res.redirect('../');
})

app.get("/api", (req, res) => {
	res.json(data);
})

app.listen(3000);

console.log("Ready!");