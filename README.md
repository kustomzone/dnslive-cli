# dnslive
## Quick and simple zone hosting for your Handshake Naming System (HNS) Top Level Domain (TLD)
Simply provide a signature of the zonefile created with the key associated with ownership of the domain to authenticate.

After you setup your zone, you can host your website with [DNS Live Free Web Hosting](https://github.com/realrasengan/dnslive-webhost).

This should not be used for production quality websites/DNS but is great for personal use!  For more info see [dns.live](https://dns.live).

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
7. Type this in to select the proper wallet in Bob.
```
./hsw-rpc selectwallet allison --api-key=APIKEY_FROM_HSD
```
8. Type this command and save the signature result -- you'll need it for the final update, it is a signature.  Note: The below signmessage command is currently not working, but a PR has been submitted to hsd [PR 393, hsd](https://github.com/handshake-org/hsd/pull/393).  Advanced users can use the `hsd-rpc signmessagewithprivkey` function after getting the associated private key with `./hsw-cli dump`.  Everyone else, I apologize, but its best to wait until the fix is merged to avoid risking your private key.
```
./hsw-rpc signmessage ADDRESS_THAT_OWNS_DOMAIN `node /path/to/dnslive-cli/urlencode.js /path/to/dnslive-cli/zonefile` --api-key=<API KEY from step 3>
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
./hsw-rpc selectwallet allison --api-key=APIKEY_FROM_HSD
./hsw-rpc signmessage ADDRESS_THAT_OWNS_DOMAIN `node ../../dnslive-cli/urlencode.js ../../dnslive-cli/DOMAIN` --api-key=APIKEY_FROM_HSD
```
> SIGNATUREOUTPUT
```
cd ../../dnslive-cli
node dnslive.js DOMAIN SIGNATUREOUTPUT
```

### Copyright
Copyright (c) 2020 The Handshake Community

MIT Licensed.

