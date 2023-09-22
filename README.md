# ipfs
IPFS


https://github.com/quic-go/quic-go/wiki/UDP-Buffer-Sizes
```
sysctl -w net.core.rmem_max=2500000
sysctl -w net.core.wmem_max=2500000
```

```
docker run -d --name ipfs_host --hostname ipfs_host \
-e IPFS_SWARM_KEY=/data/ipfs/swarm.key \
-v /srv/ipfs-staging:/export \
-v /srv/ipfs/data:/data/ipfs \
-p 4001:4001 \
-p 4001:4001/udp \
-p 8080:8080 \
-p 5001:5001 \
ipfs/kubo:latest
```


https://docs.ipfs.tech/install/run-ipfs-inside-docker/#set-up
```
docker run -d --name ipfs_host --hostname ipfs_host \
-v /srv/ipfs-staging:/export \
-v /srv/ipfs/data:/data/ipfs \
-p 4001:4001 \
-p 4001:4001/udp \
-p 8080:8080 \
-p 5001:5001 \
ipfs/kubo:latest

```


https://github.com/ipfs/kubo/issues/3933
```
 docker exec ipfs_host ipfs swarm connect /ip4/10.5.112.133/tcp/4001/ipfs/12D3KooWJr8bMRK9TvC6UdcgvT98dEccL4u4tnuykyHsaU5J7Mez
```

https://stackoverflow.com/questions/60172974/ipfs-private-network-setup-not-works
