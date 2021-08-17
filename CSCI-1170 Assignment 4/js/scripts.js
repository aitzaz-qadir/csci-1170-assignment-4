/*
 * Storing the background image file names in the array
 */
let moodBackgrounds = ["fire.jpg","sun.png","rain.jpg","winter.jpg","snowman.jpg"];

/*
 * Configure an event listener to call an anonymous function (event handler)
 * when the page finishes loading.
 * The function generates and sets the current temperature, and displays
 * this temperature on the web page.
 * This anonymous function would also check the value of the current
 * temperature, generated above, and appropriately set the 
 * background image for the division named "currentMood".
 */
document.body.onload = checkTemp();

function checkTemp() {
	var moodDiv = document.getElementById("current-mood");
	var moodIndex = 0;

	/*
	 * Generate a random number between -30 to +30, and set it as 
	 * the current temperature.
	 */
	currentTemp = Math.floor(Math.random() * 61) - 30;
	document.getElementById("current-temp").innerHTML = currentTemp;

	/*
	 * Check the current temperature value and based on that, configure
	 * an appropriate background image for the "currentMood" division.
	 */
	if (currentTemp >= 25) {
		moodIndex = 0;
	} else if (currentTemp < 25 && currentTemp >= 15) {
		moodIndex = 1;
	} else if (currentTemp < 15 && currentTemp >= 5) {
		moodIndex = 2;
	} else if (currentTemp < 5 && currentTemp >= 0) {
		moodIndex = 3;
	} else {
		moodIndex = 4;
	}

	moodDiv.style.backgroundImage = "url(img/" + moodBackgrounds[moodIndex] + ")";
	moodDiv.style.backgroundSize = "cover";

}


/*
 * Configure event handler for the check temperature button.
 */
let currentTempCheckBtn = document.getElementById("check-current-temp");
currentTempCheckBtn.addEventListener("click", checkTemp);