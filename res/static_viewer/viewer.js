const p = document.getElementById("view");

async function main() {
	const request = await fetch("../api", { method: "GET" });
	const info = await request.json();
	p.innerText = info.main;
}

main();