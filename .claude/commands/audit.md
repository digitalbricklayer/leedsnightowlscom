This audit command does three things:

1. Runs `npm audit` to find vulnerable installed packages
2. Runs `npm audit fix` to apply updates
3. Runs `npx @11ty/eleventy --serve` to start the dev webserver and navigate to the enpoint where the dev server is serving the website content and check that the website is rendered correctly.

The dev webserver dynamically allocates the port it will use depending upon which ports are currently in use. When the server starts, it logs to the screen the endpoint it has used somehting like this: "[11ty] Server at http://localhost:8080/". The default is `http://localhost:8080/` but it will change if that port is already taken.
