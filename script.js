const buttons = document.querySelectorAll("i");
const Div = document.getElementById("container");
const image = document.getElementById("image")
const paragraph = document.getElementById("paragraph");
const testimonies = ["Nice design you got there.. 😍😍", "I really love you work Ma'am 💖🤗", "Keep up with the good work ", "Niceeeeeeee", "Great work delivered 🚚 ", "Choooooooo, much love 😍 from here. "]
const img = ["img1.jpg", "img2.jpg","img3.png", "img4.png","img5.jpg","img6.png"];
let counter = 0;
buttons.forEach(function (element) {
				element.addEventListener("click", function (e) {
								if(element.classList.contains("fa-arrow-left")) {
												counter--;
												if(counter < 0) {
																counter = img.length - 1;
												}
												
												paragraph.innerHTML = testimonies[counter];
												image.src = `./images/${img[counter]}` 
												
								}
								if(element.classList.contains("fa-arrow-right")) {
												counter++;
												if(counter > img.length - 1) {
																counter = 0;
												}
												image.src = `./images/${img[counter]}` ;
												paragraph.innerHTML = testimonies[counter]
											
								}
				})
})
