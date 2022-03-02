//#region Clase color y funcion que cambia entre los colores simples
class Color {
	nombre;
	hex;
	constructor(nombreColor, hexColor) {
		this.nombre = nombreColor;
		this.hex = hexColor;
	}

	getHex() {
		return this.hex;
	}

	getNombre() {
		return this.nombre;
	}
}

let arrayColores = [
	new Color("Negro", "#000000"),
	new Color("Azul", "#0000FF"),
	new Color("Gris", "#808080"),
	new Color("Verde", "#008000"),
	new Color("Morado", "#800080"),
	new Color("Rojo", "#FF0000"),
	new Color("Blanco", "#FFFFFF"),
];

const changeColor = () => {
	let randomArray = (Math.random() * arrayColores.length) | 0;
	let randomColor = arrayColores[randomArray];
	document.getElementById("background").style.backgroundColor =
		randomColor.getHex();

	document.getElementById("tittle").style.color = randomColor.getHex();

	document.getElementById(
		"colorActual"
	).innerText = `El color actual es ${randomColor.getNombre()}`;
};
//#endregion

//#region Generador de colores hexadecimales
const hexString = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
];

let hexGenerator = () => {
	let hex = "#";
	for (let i = 0; i < 6; i++) {
		let rand = (Math.random() * hexString.length) | 0;
		hex = hex + hexString[rand];
	}

	return hex;
};

const changeColorHex = () => {
	let randomColor = hexGenerator();

	document.getElementById("background").style.backgroundColor = randomColor;

	document.getElementById("tittle").style.color = randomColor;

	document.getElementById(
		"colorActual"
	).innerText = `El color actual es ${randomColor}`;
};
//#endregion

//#region Obtencion de botones y manejo de eventos
const colorButton = document.getElementById("button");
const simpleButton = document.getElementById("simpleFlipper");
const hexButton = document.getElementById("hexFlipper");

colorButton.addEventListener("click", changeColor);

simpleButton.addEventListener("click", () => {
	colorButton.removeEventListener("click", changeColorHex);
	colorButton.addEventListener("click", changeColor);
});

hexButton.addEventListener("click", () => {
	colorButton.removeEventListener("click", changeColor);
	colorButton.addEventListener("click", changeColorHex);
});
