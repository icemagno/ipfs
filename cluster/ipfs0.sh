#! /bin/sh

docker run --name ipfs0 --hostname=ipfs0 --network=sisgeodef \
-v /etc/localtime:/etc/localtime:ro \
-p 4001:4001 \
-p 5001:5001 \
-p 8081:8080 \
-e IPFS_LOGGING=debug \
-v /srv/ipfs/ipfs0:/data/ipfs \
-d ipfs/kubo:release


# ipfs bootstrap rm --all

# ipfs swarm peers

# Frontend ( WEBUI ) só funciona após conectar os peers e
# Reconfigurar o acesso:

# ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["http://172.21.81.49:5001", "http://localhost:3000", "http://127.0.0.1:5001", "https://webui.ipfs.io"]'
# ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "POST"]'

# Depois precisa reiniciar o ipfs.
# Sempre que reiniciar o IPFS, reiniciar o CLUSTER correspondente depois.

# ipfs ping 12D3KooWMe4jQUEFidcnRmEWEeY9UnsyCPeg61ygPswjFcAvQkZ5