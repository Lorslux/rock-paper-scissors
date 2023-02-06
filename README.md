# Rock Paper Scissors
## Author: Lorena Mondini
A vanilla JavaScrip project to showcase the "rock, paper, scissors" game. 

Please use a modern browser to play.

## How to run the game and play
Download the project and open the index.html file. When you open the game, in the home page you'll find the game instructions clicking the "how to play" button.
There are two differents options to play the game: 
- YOU vs PC : where you can choose your move and the PC will do it as well at the same time in a randomly way.
- PC vs PC : where you can make to play both PC players at the same time and they will play a move in a rendomly way.

You can also run the game with this link:

https://rock-paper-scissors-henna-three.vercel.app

## How to test

I added a unit test using Jest.

Before running the tests please install the dependencies
```npm install```

to run the test execute ```npm test```



## Images
The hand sings pictures were take it from: 
https://toppng.com/free-image/rock-paper-scissors-mickey-mouse-hands-PNG-free-PNG-Images_82986

## Random number generator issue

During the development of the game I found that the method I used: 

**Math.floor(Math.random() * range)**

I found and article explaning a better method of calculating a random number:
https://pthree.org/2018/06/13/why-the-multiply-and-floor-rng-method-is-biased/

I tested with both methods and I found that there wasn't too much of a difference probably because the range that I use is too small.

## Futures improvements
- Responsive for mobile
- UI Testing 
- Improve the code to implement more cards