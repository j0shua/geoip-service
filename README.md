geoip-service
=============

Simple Express + GeoIP lookup

How-to use:
-----------
```shell
> curl SITE?ip=IP
```

i.e.
```shell
  curl http://localhost:1337/?ip=207.97.227.239
```

results in:
```javascript
{
  ip: "207.97.227.239",
  geo: {
    range: [
      3479297920,
      3479304169
    ],
    country: "US",
    region: "TX",
    city: "San Antonio",
    ll: [
      29.4889,
      -98.3987
    ]
  }
}
```


Install:
```shell
  > npm install 
```
Run:
```shell
  > PORT=1337 node index.js
```

