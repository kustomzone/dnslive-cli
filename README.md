# dnslive
## Quick and simple zone hosting for your Handshake Naming System (HNS) Top Level Domain (TLD)

### Install
```
git clone https://github.com/realrasengan/dnslive
cd dnslive
npm install request
```

### Use
```
node dnslive.js zone-file signature
```

### Example of full commands to get up and going (assumes Bob Wallet by Kyokan)
1. Download hs-client
```
git clone https://github.com/handshake-org/hs-client
```
2. Type
```
cd hs-client
npm install --production
```
3. Get your API key from Bob Wallet (Go to settings and copy HSD API Key)
4. Go to your Domains list and find out the address that owns the domain that you want to have served.
5. Type
```
cd bin
```
6. Type this command and save the result somewhere -- it's your private key.
```
./hsw-cli --id=allison dump <Address That owns your domain> --api-key=<API KEY from step 3>
```
7. Type this command and save the signature result -- you'll need it for the final update, it is a signature.
```
./hsd-cli rpc signmessagewithprivkey <private key from step 6> `node /path/to/dnslive/urlencode.js /path/to/dnslive/zonefile` --api-key=<API KEY from step 3>
```
8. Go to the /path/to/dnslive directory
```
node dnslive.js <zone file & domain> <signature from step 7>
```
### Straight forward example assuming you have 2 folders at the same level, hs-client and dnslive (i.e., installed them in same folder):
```
cd hs-client/bin
./hsd-cli rpc signmessagewithprivkey `./hsw-cli --id=allison dump ADDRESS --api-key=APIKEY `node ../../dnslive/urlencode.js ../../dnslive/ix` --api-key=APIKEY
```
> SIGNATUREOUTPUT
```
cd ../../dnslive
node dnslive.js DOMAIN SIGNATUREOUTPUT
```

### Copyright
Copyright (c) 2020 The Handshake Community
MIT Licensed.

