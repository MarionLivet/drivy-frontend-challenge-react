# Drivy Frontend Challenge

This coding challenge comes from [Drivy](https://drivy.com/), a french company with a cool product that I use and like. The engineering team at Drivy put up on Github their technical challenges and the frontend one looked very interesting so I decided to do it to learn new librairies or concepts I heard of but haven't had the time to try out.
You can read the guidelines and what the actual challenge is over their [Github repo](https://github.com/drivy/jobs/tree/master/frontend).
I've also [took up the challenge using Vue.js](https://github.com/MarionLivet/drivy-frontend-challenge-vuejs) as I wanted to see how Vue works.

## What I used

- React: It's the JS tool I'm most familiar with and I wanted to test new things with it (such as the hooks)
- styled-components: I heard a lot of this library but I never introduced it in the stacks I've worked with
- CSS grid: I never used it on previous projects so I take this opportunity to try it
- Jest: Not a lot of units to test here but I wanted to add tests on the price calculation

## What I could do to improve my solution
- Switch from a duration number input to 2 date pickers and compute the duration from there. It would be much more user-friendly.
- Extract styles from components files
- Integration testing
- Make a client api
- Normalize the data returned by the back-end
- Handle errors
- Add a loader
- Add some pagination

## Impressions

### CSS grid
Even though the use of the CSS grid system in my solution is not very complex (to say the least), it allowed me to take some time and read carefully the [complete guide of CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/).

### styled-components
Switching from my SASS habits to the way styled-components work was not easy at the beginning. There are several things I wanted to do that seemed basic to do with SASS that actually took me some time and research to do with styled-components (for example: how to select a child to change its style when hovering its parent [x](https://www.styled-components.com/docs/advanced#referring-to-other-components), how to put style on the <body> [x](https://www.styled-components.com/docs/api#createglobalstyle), etc.)
At first, I wasn't happy with the fact that the library is handling the markup for me but I got used to it.
One thing I'm wondering though is: if one day a team want to switch to another CSS-in-JS or just come back to a pure CSS implementation, how would they do it?
