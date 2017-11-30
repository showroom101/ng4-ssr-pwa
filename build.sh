#!/bin/bash

npm run deploy

cd docker
docker-compose stop
docker-compose up