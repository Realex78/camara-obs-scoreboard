const title = document.getElementById("title");
const team1 = document.getElementById("team1");
const score1 = document.getElementById("score1");
const team2 = document.getElementById("team2");
const score2 = document.getElementById("score2");
const table = document.getElementById("table");

async function main() {
	const request = await fetch("../api", { method: "GET" });
	const data = await request.json();
	if (data.visible) {
		table.style = "opacity: 1";
	} else {
		table.style = "opacity: 0"
	}
	title.innerText = data.title;
	team1.innerText = data.team1;
	score1.innerText = data.score1;
	team2.innerText = data.team2;
	score2.innerText = data.score2;
}

main();

setInterval(() => {
	main();
}, 2000);