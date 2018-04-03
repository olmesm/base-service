# API Service

All developed inside a docker container

## Requires

- [Docker]

# To Run

```sh
# Copy the .env.template and add your vars
cp .env.template .env

# To Develop
sh run-container.sh

# Once Running
npm start

# To create a second window
##   Get a list of currently running containers
docker ps
##   Attach to the ID of your container
docker attach <container_id>

# Alternatively if you only have the one container running
docker attach $(docker ps)

# To exit the interactive terminal
ctrl + d
```

<!-- References -->

[Docker]: https://www.docker.com/
