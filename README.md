### Whack a mole game

A classic game where you have to be quick and click on a mole when it peeps out of its hole. 

First I created a random time and random hole functions.

Random time determines the speed at which the moles pop up, and it takes 2 parameters for min and max number of milliseconds.

Random hole assigns a random number to be used as an index value to determine the hole from which a mole peeps out. We make sure that the same hole is not called twice by using an if statement, if the last hole is equal to the current hole, then we invoke the random hole again.

The peep function uses random time function and assigns the returned number to a time varible. We also use the random hole function to return a random hole and assign it to its hole varible. 

We then add the up class to that hole, so that the mole shows up. We use setTimeout with value of time variable from peep function. If our time is not up, we call peep again. 

Start game function resets the scoreboard to zero, and calls the peep function and determines the game's length.

Function bonk checks if the user managed to click on a mole. If it's a legitimate click, the score increments and the up class is removed and scoreboard updated.