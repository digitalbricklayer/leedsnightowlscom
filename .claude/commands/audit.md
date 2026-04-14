This audit command does the following two tasks in order with an optional third task to verify that the website is still being rendered properly:

1. Runs `npm audit` to find vulnerable installed packages
2. Runs `npm audit fix` to apply updates
3. In order to test any changes made by task 2, run `npx @11ty/eleventy --serve` to start the dev webserver and navigate to the enpoint where the dev server is serving the website content and check that the website is rendered correctly. If no changes were made by task 2, ignore this task as it is unnecessary.

The dev webserver dynamically allocates the port it will use depending upon which ports are already in use. When the dev server starts, it logs to the screen the endpoint it has used like this: "[11ty] Server at http://localhost:8080/". The default is `http://localhost:8080/` but it will change if that port is already taken.
