# Dustin Simensen - Brandlive coding challenge

Given the mockup to this landing page, use vanilla JS or React to recreate the landing page for an event.

## Tasks

- Hero Banner that includes the image, information about the event, and a working countdown timer to the day of the event. ✅

- Speakers section with a bio (3 speakers total). Each bio should include an image, name, job title, and description. ✅

- Make an onClick() event that opens a popup modal with more information about the speaker. ✅

- A video section that links out to any video (I embedded a youtube video).✅

- Sponsor section that shows all the event sponsors.✅

- Footer section.✅

- Tested the website on many different viewport sizes. Including various mobile sizes in the chrome viewport simulator (I was unable to test on an actual mobile device). ✅

## What I did

I used create-react-app to bootstrap a simple React UI because I'm familiar with it, enjoy working with components, and find creating interactivity is easier when working with react. The only package, besides react.js, that I pulled into the project was [react-player](https://www.npmjs.com/package/react-player) to help embed the youtube video inside the page.

I tried to match the styles as closely as possible without actually having access to a Figma doc (or something similar). Similarly, I found the fonts online, but some were paid, so I left the fonts as the defaults because I did not think it was within the scope of the test.

I decided to use css modules instead of a css framework because it felt a little overkill to bring one in for such a small project. If the project were much larger in scope I may consider using one or a tool like SASS/PostCSS.

I wrote some very simple tests in Jest.js. If I had some more time to spend on the project, I would do more research on Jest's mocking function and maybe dig deeper on the countdown clock testing.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\

Thank you for taking the time to look at this repo. I'm open to any feedback you may have for me.  👍
