# ipfs
IPFS


https://github.com/quic-go/quic-go/wiki/UDP-Buffer-Sizes
```
sysctl -w net.core.rmem_max=2500000
sysctl -w net.core.wmem_max=2500000
```

https://docs.ipfs.tech/install/run-ipfs-inside-docker/#set-up
```
docker run -d --name ipfs_host -v $ipfs_staging:/export -v $ipfs_data:/data/ipfs -p 4001:4001 -p 4001:4001/udp -p 127.0.0.1:8080:8080 -p 127.0.0.1:5001:5001 ipfs/kubo:latest
```



