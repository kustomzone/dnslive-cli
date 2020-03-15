# dnslive
## Quick and simple zone hosting for your Handshake Naming System (HNS) Top Level Domain (TLD)

### Install
```
git clone https://github.com/realrasengan/dnslive-cli
cd dnslive-cli
npm install request
```

### Use
```
node dnslive.js zonefile signature-of-zonefile
```

### Example of full commands to get up and going (assumes [Bob Wallet by Kyokan](https://github.com/kyokan/bob-wallet))
#### Please note, the zonefile filename must be the same as your domain.  So if your domain is 'jack' then call the zonefile 'jack'
1. Set name resource records in Bob (Domain Manager -> Domain -> Records) to:
```
NS ns1.dns.live.
NS ns2.dns.live.
NS ns3.dns.live.
```
2. Copy the address that owns the domain to a temporary textfile/notepad.
3. Get your API key from Bob Wallet  (Settings -> copy HSD API Key to a temporary textfile/notepad)
4. Download hs-client
```
git clone https://github.com/handshake-org/hs-client
```
5. Once downloaded, type
```
cd hs-client
npm install --production
```
6. Then, type:
```
cd bin
```
7. Get your private key and save the result somewhere.  You want to do this on an air-gapped machine for maximum safety.
```
./hsw-cli --id=allison dump <address that owns the domain from step 1> --api-key=<API KEY from step 3>
```
8. Type this command and save the signature result -- you'll need it for the final update, it is a signature.
```
./hsd-cli rpc signmessagewithprivkey <private key from step 6> `node /path/to/dnslive-cli/urlencode.js /path/to/dnslive-cli/zonefile` --api-key=<API KEY from step 3>
```
9. Go to the /path/to/dnslive-cli directory
```
node dnslive.js <zone file> <signature from step 8>
```
10. Done.

### A more straight forward example
#### Assumes you have 2 folders at the same level, hs-client and dnslive-cli (i.e., installed them in same folder):
```
cd hs-client/bin
./hsd-cli rpc signmessagewithprivkey `./hsw-cli --id=allison dump ADDRESS_THAT_OWNS_DOMAIN --api-key=APIKEY_FROM_HSD `node ../../dnslive-cli/urlencode.js ../../dnslive/DOMAIN` --api-key=APIKEY_FROM_HSD
```
> SIGNATUREOUTPUT
```
cd ../../dnslive
node dnslive.js DOMAIN SIGNATUREOUTPUT
```

### Copyright
Copyright (c) 2020 The Handshake Community

MIT Licensed.

