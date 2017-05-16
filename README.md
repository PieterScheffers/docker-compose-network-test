# docker-compose network test

This repository demonstrates how 2 docker-compose files can be added to the same network, so the services can talk to each other.

To start:
- Create the serverclient-network `docker network create serverclient-network` (default is bridge network, use overlay when using docker swarm)
- Start server docker-compose.yml `cd server && docker-compose up --build
- Start client docker-compose.yml `cd client && docker-compose up --build
