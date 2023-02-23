const button = document.getElementById("button");
const form = document.getElementById("form");

button.addEventListener("click", async ev => {
	ev.preventDefault();
	const formData = new URLSearchParams(new FormData(form))
	await fetch("./api", { method: "POST", body: formData })
});