// import React from "react";
// import styled from "styled-components";
// // import script from './script'

// // import todayIsImg from "../SNS/images/todayIs.png";



// // const Title = styled.div`
// //   display: inline-block;
// //   background: url(${todayIsImg}) no-repeat 0 1px/86px 13px;
// //   width: 84px;
// //   height: 13px;
// // `;


// const Option = styled.option``;

// function couplecode() {

//     const slider = document.querySelector(".range__slider");
//     const sliderValue = document.querySelector(".length__title");
//     slider.querySelector("input").addEventListener("input", event => {
//         sliderValue.setAttribute("data-length", event.target.value);
//         applyFill(event.target);
//     });
//     applyFill(slider.querySelector("input"));

//     const resultContainer = document.querySelector(".result");
//     // Text info showed after generate button is clicked
//     const copyInfo = document.querySelector(".result__info.right");
//     // Text appear after copy button is clicked
//     const copiedInfo = document.querySelector(".result__info.left");


//     function randomString() {
//         var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
//         var string_length = 15;
//         var randomstring = '';
//         for (var i=0; i<string_length; i++) {
//         var rnum = Math.floor(Math.random() * chars.length);
//         randomstring += chars.substring(rnum,rnum+1);
//         }
//         //document.randform.randomfield.value = randomstring;
//         return randomstring;
//         }

//     // This is a simple Password Generator App that will generate random password maybe you can you them to secure your account.
// // I tried my best to make the code as simple as possible please dont mind the variable names.
// // Also this idea came in my mind after checking Traversy Media's latest video.

// // Clear the concole on every refresh
// console.clear();
// // set the body to full height
// // document.body.style.height = `${innerHeight}px`

// // Range Slider Properties.
// // Fill : The trailing color that you see when you drag the slider.
// // background : Default Range Slider Background
// const sliderProps = {
// 	fill: "#0B1EDF",
// 	background: "rgba(255, 255, 255, 0.214)",
// };

// // Selecting the Range Slider container which will effect the LENGTH property of the password.
// const slider = document.querySelector(".range__slider");

// // Text which will show the value of the range slider.
// const sliderValue = document.querySelector(".length__title");

// // Using Event Listener to apply the fill and also change the value of the text.
// slider.querySelector("input").addEventListener("input", event => {
// 	sliderValue.setAttribute("data-length", event.target.value);
// 	applyFill(event.target);
// });
// // Selecting the range input and passing it in the applyFill func.
// applyFill(slider.querySelector("input"));
// // This function is responsible to create the trailing color and setting the fill.
// function applyFill(slider) {
// 	const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
// 	const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage +
// 		0.1}%)`;
// 	slider.style.background = bg;
// 	sliderValue.setAttribute("data-length", slider.value);
// }

// // Object of all the function names that we will use to create random letters of password
// const randomFunc = {
// 	lower: getRandomLower,
// 	upper: getRandomUpper,
// 	number: getRandomNumber,
// 	symbol: getRandomSymbol,
// };

// // Random more secure value
// function secureMathRandom() {
//   return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
// }

// // Generator Functions
// // All the functions that are responsible to return a random value taht we will use to create password.
// function getRandomLower() {
// 	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// function getRandomUpper() {
// 	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// function getRandomNumber() {
// 	return String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
// }
// function getRandomSymbol() {
// 	const symbols = '~!@#$%^&*()_+{}":?><;.,';
// 	return symbols[Math.floor(Math.random() * symbols.length)];
// }

// // Selecting all the DOM Elements that are necessary -->

// // The Viewbox where the result will be shown
// const resultEl = document.getElementById("result");
// // The input slider, will use to change the length of the password
// const lengthEl = document.getElementById("slider");

// // Checkboxes representing the options that is responsible to create differnt type of password based on user
// const uppercaseEl = document.getElementById("uppercase");
// const lowercaseEl = document.getElementById("lowercase");
// const numberEl = document.getElementById("number");
// const symbolEl = document.getElementById("symbol");

// // Button to generate the password
// const generateBtn = document.getElementById("generate");
// // Button to copy the text
// const copyBtn = document.getElementById("copy-btn");
// // Result viewbox container
// const resultContainer = document.querySelector(".result");
// // Text info showed after generate button is clicked
// const copyInfo = document.querySelector(".result__info.right");
// // Text appear after copy button is clicked
// const copiedInfo = document.querySelector(".result__info.left");

// // Update Css Props of the COPY button
// // Getting the bounds of the result viewbox container
// let resultContainerBound = {
// 	left: resultContainer.getBoundingClientRect().left,
// 	top: resultContainer.getBoundingClientRect().top,
// };
// // This will update the position of the copy button based on mouse Position
// resultContainer.addEventListener("mousemove", e => {
// 	copyBtn.style.setProperty("--x", `${e.x - resultContainerBound.left}px`);
// 	copyBtn.style.setProperty("--y", `${e.y - resultContainerBound.top}px`);
// });
// window.addEventListener("resize", e => {
// 	resultContainerBound = {
// 		left: resultContainer.getBoundingClientRect().left,
// 		top: resultContainer.getBoundingClientRect().top,
// 	};
// });

// // Copy Password in clipboard
// copyBtn.addEventListener("click", () => {
// 	const textarea = document.createElement("textarea");
// 	const password = resultEl.innerText;
// 	if (!password || password == "CLICK GENERATE") {
// 		return;
// 	}
// 	textarea.value = password;
// 	document.body.appendChild(textarea);
// 	textarea.select();
// 	document.execCommand("copy");
// 	textarea.remove();

// 	copyInfo.style.transform = "translateY(200%)";
// 	copyInfo.style.opacity = "0";
// 	copiedInfo.style.transform = "translateY(0%)";
// 	copiedInfo.style.opacity = "0.75";
// });

// // When Generate is clicked Password id generated.
// generateBtn.addEventListener("click", () => {
// 	const length = +lengthEl.value;
// 	const hasLower = lowercaseEl.checked;
// 	const hasUpper = uppercaseEl.checked;
// 	const hasNumber = numberEl.checked;
// 	const hasSymbol = symbolEl.checked;
// 	resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
// 	copyInfo.style.transform = "translateY(0%)";
// 	copyInfo.style.opacity = "0.75";
// 	copiedInfo.style.transform = "translateY(200%)";
// 	copiedInfo.style.opacity = "0";
// });

// // Function responsible to generate password and then returning it.
// function generatePassword(length, lower, upper, number, symbol) {
// 	let generatedPassword = "";
// 	const typesCount = lower + upper + number + symbol;
// 	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
// 	if (typesCount === 0) {
// 		return "";
// 	}
// 	for (let i = 0; i < length; i++) {
// 		typesArr.forEach(type => {
// 			const funcName = Object.keys(type)[0];
// 			generatedPassword += randomFunc[funcName]();
// 		});
// 	}
// 	return generatedPassword.slice(0, length);
// }
//   return (
//     <div>
//    <div class="container">
// 	<h2 class="title">Password Generator</h2>
// 	<div class="result">
// 		<div class="result__title field-title">Generated Password</div>
// 		<div class="result__info right">click to copy</div>
// 		<div class="result__info left">copied</div>
// 		<div class="result__viewbox" id="result">CLICK GENERATE</div>
// 		<button id="copy-btn" ><i class="far fa-copy"></i></button>
// 	</div>
//     {/* style="--x: 0; --y: 0" */}
// 	<div class="length range__slider" data-min="4" data-max="32">
// 		<div class="length__title field-title" data-length='0'>length:</div>
// 		<input id="slider" type="range" min="4" max="32" value="16" />
// 	</div>

// 	<div class="settings">
// 		<span class="settings__title field-title">settings</span>
// 		<div class="setting">
// 			<input type="checkbox" id="uppercase" checked />
// 			<label for="uppercase">Include Uppercase</label>
// 		</div>
// 		<div class="setting">
// 			<input type="checkbox" id="lowercase" checked />
// 			<label for="lowercase">Include Lowercase</label>
// 		</div>
// 		<div class="setting">
// 			<input type="checkbox" id="number" checked />
// 			<label for="number">Include Numbers</label>
// 		</div>
// 		<div class="setting">
// 			<input type="checkbox" id="symbol" />
// 			<label for="symbol">Include Symbols</label>
// 		</div>
// 	</div>

// 	<button class="btn generate" id="generate" onClick={randomString}>Generate Password</button>
// </div>


//     </div>
//   );
// }

// export default couplecode;
