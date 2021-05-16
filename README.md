# salsify-takehome

Upon clicking enter, the progress bar updates. Upon clicking the button, the bar runs to completion. 

Link to Project: https://salsify-anvytran.netlify.app/


### How It's Made:

Updating Progress Bar:

After the user clicks enter, the user's input is validated. If it is an invalid input, an error message appears and the ability to click the 'Run' button is disabled. If it is a valid input, the progress bar's width is updated to the specified input.

Running To Completion:

I solved this task two ways: 1) using transition-property + transition-duration and 2) using setInterval(). 

The setInterval() methods runs the function to increment the bar by 1% every 10ms. The transition-duration property updates the width in the specified time span. 

Using the transition-duration property is more efficient because the bar runs to completion with one operation. The animation is occurring using CSS in the browser. However, when using setInterval(), the function must run every 10ms for however many times specified. 

Abstraction

Abstraction hides away details and code becomes more resilient and easier to test. 


### Edge Cases

#1 NaN Values

I set the input type to ‘number.’ Despite that, Chrome + Safari still allows strings that aren’t valid numbers to be typed into the input. 

For example: ‘5+5’,  ‘.7-1’, ‘+’, ‘-’, ‘e’

These inputs are passed as empty strings.

For simplicity’s sake, I treated the value of these cases as 0. 

#2 User does not hit enter key

What happens if the user types in a number and clicks the run button, but does not hit the enter key?

To address this, I decided that the progress bar will update to the typed percentage and then, it will run to completion. This is because the user most likely intended to hit the enter key and I wanted to ensure an intuitive experience. To handle this in my solution using transition-duration, I used the setTimeout method. 




