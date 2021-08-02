# ES6 Classes

&nbsp;
## Background

For this assignment you are being tasked with creating a Car constructing class in JavaScript.

&nbsp;
## Setup

Please create a git repository titled `m10-hw12-lastname-firstname` and clone the repo to your computer. Copy the files from the `unsolved` folder into the root directory of your cloned repository. Write your code in the `index.js` file that has been provided.

There are tests included in this assignment. You can run the tests using the `index.html` file with the live server extension. When you have completed the assignment, all tests should pass.

&nbsp;
## Instructions

Your assignment is to create a class named `Car` in JavaScript. This class will create objects that have three properties:

1. `make` (String) - The car's manufacturer. _E.g. Honda_
1. `model` (String) - The type of model. _E.g. Civic_
1. `year` (Integer) - Four digit year the car was made. _E.g. 1998_

Your class should also have the following methods:

- `honk` - This method should log "BEEP BEEP!" to the console when called.
- `performMaintenance` - This method should use the `setTimeout` function to log "maintenance complete" to the console **after exactly 3 seconds**.

After you have created your `Car` class do the following in the order listed below:

1. Create a variable named `mySweetRide` and assign it a car created with your class using the following arguments:
    - `make`: 'Pontiac'
    - `model`: 'Fiero'
    - `make`: 1988
1. call `mySweetRide`'s `honk` method once
1. call `mySweetRide`'s `performMaintenance` method once

Running the `index.html` will run the included tests for this assignment. All of the tests should pass when you have completed the requirements listed above.

&nbsp;
## Deployment

Your code must be deployed to GitHub Pages. To deploy a repository to GitHub pages you must

1. Ensure your repository has an `index.html` file in the root directory.
1. Navigate to the `settings` section of the repository.
1. Click on `pages` in the left navigation menu.
1. Under `source` click the dropdown and select your `master` or `main` branch.
1. Click `save`.

Your site should be deployed to `<your github username>.github.io/<your repository name>` in 5-10 minutes.

&nbsp;
## Submission

Please submit both a link to your repository and a link to the live site. Also please include any comments on stumbling blocks or difficulties encountered while completing the assignment.

&nbsp;
## Resources

This assignment will test your ability to write ES6 classes and utilize the `setTimeout` function.

Classes:

- [Classes on W3 Schools](https://www.w3schools.com/js/js_classes.asp)
- [Classes on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Deep Dive of JS prototypes and classes (article)](https://ui.dev/beginners-guide-to-javascript-prototype/)
- [Deep Dive of JS prototypes and classes (video)](https://www.youtube.com/watch?v=XskMWBXNbp0)

`setTimeout`:

- [setTimeout on W3](https://www.w3schools.com/jsref/met_win_settimeout.asp)
- [JS Timing Events on W3](https://www.w3schools.com/js/js_timing.asp)
- [setTimeout on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)