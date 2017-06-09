#!/bin/bash

eval $(docker-machine env client)

./compose.sh production build
./compose.sh production up -d
./compose.sh production logs
