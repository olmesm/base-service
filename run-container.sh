#! /bin/sh

WORKDIR=/usr/app
PORT=4000

docker run --rm -it \
  -e PORT=$PORT \
  -p $PORT:$PORT \
  -v $(pwd):$WORKDIR \
  -w $WORKDIR \
  node:alpine sh
