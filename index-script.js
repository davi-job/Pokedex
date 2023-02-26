"use strict";

let data;

let pokeImg;
let pokeName;

async function Get() {
	let id = document.querySelector(".id-input").value;
	let url = "https://pokeapi.co/api/v2/pokemon/" + id;

	let response = await fetch(url);
	data = await response.json();

	Execute();
}

function Execute() {
	pokeImg.src = data.sprites.front_default;

	pokeName.textContent = data.name;
}

window.onload = () => {
	pokeImg = document.querySelector(".poke-img");
	pokeName = document.querySelector(".poke-name");

	document.querySelector(".confirm-btn").addEventListener("click", Get);
};
