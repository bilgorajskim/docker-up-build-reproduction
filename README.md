`docker-compose up --build` should install NPM deps that have been changed since last `docker-compose up --build` invocation. To test this, execute commands one after another:

- `docker-compose up --build` - should install deps (first time) and print "no leftpad installed"
- `npm install left-pad`
- `docker-compose up --build` - should install leftpad inside the container and use leftpad
- `docker-compose up --build` - it should not install/remove anything (already installed) and use leftpad
- `npm remove left-pad`
- `docker-compose up --build` - should remove leftpad and print "no leftpad installed"
- `docker-compose up --build` - should not install/remove anything and print "no leftpad installed
