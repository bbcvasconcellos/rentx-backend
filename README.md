# RentX - Backend
This file repo contains the backend for the mobile application. This project's mere purpose is for studies only. 
It uses MVC architecture and SOLID principles.

## Stack used
- [NodeJS](https://nodejs.org/en/) with [express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Swagger](https://swagger.io/)
- [Docker](https://docs.docker.com/)

## How do I start this project? 🤔
### With Docker:
`docker-compose up -d`
**To check if the container is up and running:**
1. `docker ps` *this will return some info about the container; make sure to copy its name under the NAMES column*
2. `docker exec -it <NAME> /bin/bash`
**For linux users**
To remove the mandatory sudo command prior to any docker command: https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user

### Without Docker
1. Download this repo: `git clone https://github.com/bbcvasconcellos/rentx-backend.git`
2. Make sure your node version is compatible (v14+), using nvm: `nvm use 14.xx`
3. Download the dependencies packages: `yarn`
4. Run the application: `yarn dev`

## More info about the routes? 📖
After starting the project, go to `localhost:3003/api-docs` to see the documentation of the project routes 
