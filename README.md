

## Clicky Game

Welcome to my first project involving React which is the Clicky Game! This app was designed to use React.Js to display 12 pictures and the user can then click on each of the 12 which will increase their count! The player needs to remember which pictures they have already clicked however because the goal is to click 12 without any duplicates. If you can get all 12 without clicking the same picture twice you win.

## How it works

The game is created using React.Js to take in a JSON list of images and pass them as props through to the ClickPics component. For each image in the JSON array a few attributes are passed to and they are displayed on the screen with onClick functionality. The Navbar component also recieves data from the app.js file to render the current count and the high score. When the user clicks a picture the clickEvent function is called which checks to see if the image is part of the clickedArr. If the image has not been clicked then the user count goes up, the images are randomized using a function to sort each part of the image array and the game continues unless all 12 have been clicked.

If the user clicks an image that has already been clicked the newBest function and reset functions are called. The newBest simply updates the state of the high score to match the current count. The reset function sets the value of count to 0 and empties the clickedArr so that no images are recognized as being part of it. This essentially brings the game back to the start so the user can try to improve their score.

## Technologies Used

 - ReactJS
 - NPM
 - JavaScript
 - BootStrap
