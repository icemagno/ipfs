#! /bin/sh

docker run --name ipfs0 --hostname=ipfs0 --network=sisgeodef \
-v /etc/localtime:/etc/localtime:ro \
-p 4001:4001 \
-p 5001:5001 \
-p 8081:8080 \
-v /srv/ipfs/ipfs0:/data/ipfs \
-d ipfs/go-ipfs:v0.4.15

