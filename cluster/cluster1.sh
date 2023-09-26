#! /bin/sh
  
docker run --name cluster1 --hostname=cluster1 --network=sisgeodef \
-v /etc/localtime:/etc/localtime:ro \
-e CLUSTER_PEERNAME=cluster1 \
-e CLUSTER_SECRET=dbcdbdebed71d71621cef9e4a4bd9eb0b603564bbef90888e57e5fe7386ff8ca \
-e CLUSTER_IPFSHTTP_NODEMULTIADDRESS=/dns4/ipfs1/tcp/5001 \
-e CLUSTER_CRDT_TRUSTEDPEERS='*' \
-e CLUSTER_MONITORPINGINTERVAL=2s \
-v /srv/ipfs/cluster1:/data/ipfs-cluster \
-d ipfs/ipfs-cluster:1.0.6 daemon --bootstrap /ip4/10.5.112.132/tcp/9096/p2p/12D3KooWMmiTqj63kQQKEfcUumRCrc6cXMj22jGNcZgBX2cnimzZ
