#! /bin/sh
  
docker run --name cluster0 --hostname=cluster0 --network=sisgeodef \
-v /etc/localtime:/etc/localtime:ro \
-p 9094:9094 \
-p 9095:9095 \
-p 9096:9096 \
-e CLUSTER_PEERNAME=cluster0 \
-e CLUSTER_SECRET=dbcdbdebed71d71621cef9e4a4bd9eb0b603564bbef90888e57e5fe7386ff8ca \
-e CLUSTER_IPFSHTTP_NODEMULTIADDRESS='/dns4/ipfs0/tcp/5001' \
-e CLUSTER_CRDT_TRUSTEDPEERS='*' \
-e CLUSTER_RESTAPI_HTTPLISTENMULTIADDRESS='/ip4/0.0.0.0/tcp/9094' \
-e CLUSTER_MONITORPINGINTERVAL=2s \
-v /srv/ipfs/cluster0:/data/ipfs-cluster \
-d ipfs/ipfs-cluster
