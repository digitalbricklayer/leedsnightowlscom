This audit command does three things:

1. Runs `npm audit` to find vulnerable installed packages
2. Runs `npm audit fix` to apply updates
3. Runs tests to verify the updates didn't break anything. At a minimum the site must be built to ensure that the build is successful.
