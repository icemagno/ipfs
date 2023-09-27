#! /bin/sh

docker run --name ipfs1 --hostname=ipfs1 --network=sisgeodef \
-v /etc/localtime:/etc/localtime:ro \
-p 4001:4001 \
-p 5001:5001 \
-p 8081:8080 \
-e IPFS_LOGGING=verbose \
-v /srv/ipfs/ipfs1:/data/ipfs \
-d ipfs/kubo:release

# O Endereço é o peer id
# ipfs bootstrap rm --all
# ipfs bootstrap add  /ip4/172.22.1.49/tcp/4001/ipfs/12D3KooWMe4jQUEFidcnRmEWEeY9UnsyCPeg61ygPswjFcAvQkZ5

# Changing user to ipfs
# ipfs version 0.19.0-dev
# generating ED25519 keypair...done
# peer identity: 12D3KooWB2MooTU3rHdmAsUD5C5SNZJymWfBNUnkBw8oJnrMN4UW  <<<-----

# No 132:
# ipfs swarm peers
# /ip4/10.5.112.133/tcp/60970/p2p/12D3KooWEGXtoZwoGVc2Fm4DJ6V4zgpL8tiUzaYmJu5oFe3yERJa


# No 133:
# ipfs swarm peers
# /ip4/10.5.112.132/tcp/4001/p2p/12D3KooWMe4jQUEFidcnRmEWEeY9UnsyCPeg61ygPswjFcAvQkZ5

# http://10.5.112.132:5001/webui

# ipfs swarm addrs --local --group