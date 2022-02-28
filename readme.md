Docker Content Trust (DCT) allows publishers of images to use digital signatures, effectively allowing users pulling their images to verify that the content of the image has not been tampered with the identity of the publisher.

# build an image
`docker build -f Dockerfile.al -t hello-world-js .`

# tag with docker username/repo:tag
`docker tag hello-world-js ramanagali/hello-world-js:1`

# check docker images
`docker images`ls ~/.docker/trust/private


# Generating signing keys(public/private keypair)
```
docker trust key generate gvr
public key: same folder
private key: ls ~/.docker/trust/private

cat /Users/gvr/Projects/hello-world-node/gvr.pub
```

# Allowing the public key to sign images
`docker trust signer add --key gvr.pub gvr1 ramanagali/hello-world-js:1`

# Signing the image
`docker trust sign ramanagali/hello-world-js:1`

# Inspecting singed images
`docker trust inspect --pretty ramanagali/hello-world-js`

# Remote Trust data for a tag
```docker trust revoke ramanagali/hello-world-js:1
docker trust revoke ramanagali/hello-world-js:2
```

# remove docker trust signer for repo ramanagali/hello-world-js
```
docker trust signer remove dev1 -f ramanagali/hello-world-js
docker trust signer remove dev2 -f ramanagali/hello-world-js
```# hello-world-js
