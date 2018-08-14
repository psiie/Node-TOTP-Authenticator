## Node TOTP Authenticator
With build process for inclution in browser or with tools such as BitBar.

#### Build
Add your private key to app/index.js
Be sure not to upload this online!
`npm run build`

#### Run
`node build/app.js` or add the `--no-deprecation` flag if you get deprecation warnings. `node --no-deprecation build/app.js`

#### BitBar
1) Drop everything in the Bitbar_Setup folder into your Bitbar script folder.
2) place the built app.js file into the authenticator folder in your Bitbar script folder.
3) Replace `PUT_PASSWORD_HERE` and `ABSOLUTE_PATH` respectively.