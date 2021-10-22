# My First Euclid
Why do we still learn geometry? Is it because we will all need to cite facts about triangles, circles, and polyhedra in our everyday lives? No. We learn geometry because it represents a paradigm of human knowledge. For over 2000 years Euclid's _Elements_ was a core component of standard education, being eclipsed only during the 19th and 20th centuries. 
_Elements_ represents the epitome of an exact science; the methodical, rigorous demonstration of results starting from first principles. No intuition, no guesses, just dry logic and diagrams. Propositions depending on propositions. 
We still learn geometry because it teaches us how to _think carefully and clearly_. To question what we know. To demand proof, and to produce it. 

![Alt text](https://i.imgur.com/bnJRD7l.png)

## Getting Started

This app is a way to record and organize propositions from a geometry class. I often like to treat geometry like creating a toolbox. Once a theorem is established you can use it in later proofs. The app lets us see all of the tools in our toolbox.

You can try the deployed app for yourself [here](https://my-first-euclid.herokuapp.com/)
[Project Planning](https://trello.com/b/FaaPzmFR/project-2)

![Alt text](https://i.imgur.com/2ZpgkAH.png) <!-- all props page-->

And we can add tools to our toolbox! However, we can't do so without listing some dependencies! 

<!-- **Click [here](https://amillar1.github.io/AMillar_SEI_Project1_Minesweeper/) to play!** -->
![Alt text](https://i.imgur.com/4AEsePX.png) <!-- new prop -->

You can also view details on each proposition and add comments. I hear the fifth postulate caused a bit of a stir. We can hash things out in the comments. 

![Alt text](https://i.imgur.com/cpxLcWg.png) <!-- detail page-->

## Next Steps
There are a number of features that could be added to improve the apps functionality: 
* Dependencies should be an extra schema in the database. When creating a proposition, the user should be able to query the database and add any other proposition as a dependency. 
* A different data types for dependencies: postulates, theorems, inference rules. 
* A form for entering a two-column proof. 
* Upload images to have relevant diagrams for each proposition's proof. 
* A way to sort propositions by dependency. 
* A 'thumbnail' or 'preview' view of each proposition in the index view. 

## Technologies Used
* HTML/CSS
* native Javascript
* MongoDB
* ExpressJS
* NodeJS
* Google OAuth
* Heroku 