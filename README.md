# SF2G Website

    The SF2G website source is in the `src` directory. It uses [Server Side Includes](https://en.wikipedia.org/wiki/Server_Side_Includes) for simple templating.

To render the site you can use the `render.js` script. ([Installing NodeJS](https://nodejs.org/en/download))

    npm install ssi
    node render.js

This is done automatically on PR merge using GitHub Actions.
