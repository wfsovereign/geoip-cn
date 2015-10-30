GeoIP-CN
==========

### 说明
> 解析ip地址信息，返回国家英文简写、城市名以及中文名字等
> 测试所用ip地址均为网上搜索所得，侵删

### 安装
> npm install geoip-cn    

### 使用
``` javascript
var	geoip = require('geoip')
var ip = '219.78.255.255';
var geo = geoip.lookup(ip);
console.log(geo);

//{ range: [ 3679384832, 3679387647 ],
//    country: 'HK',
//    region: '00',
//    city: 'Central District',
//    ll: [ 22.2833, 114.15 ],
//    metro: 0,
//    ChineseName: '中国香港' }

```


### FAQ
Base one GeoIp-lite repository.

