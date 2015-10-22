/**
 * Created by shining3d-fyqj on 15/10/22.
 */


var should = require('should'),
    geoip = require('../lib/geoip');


describe('geo ip test', function () {

    it('Chinese ipv4 address', function (done) {
        var ip4 = '124.160.214.66';
        var actualInfo = geoip.lookup(ip4);
        console.log(actualInfo);
        should.exist(actualInfo);
        should(actualInfo.country).eql('CN');
        should(actualInfo.ChineseName).eql('中国');
        done();
    });

    it('Germany ipv4 address', function (done) {
        var ip4 = '195.112.167.129';
        var actualInfo = geoip.lookup(ip4);
        console.log(actualInfo);
        should.exist(actualInfo);
        should(actualInfo.country).eql('DE');
        should(actualInfo.ChineseName).eql('德国');
        done();
    });

    it('Singapore ipv4 address', function (done) {
        var ip4 = '58.146.191.255';
        var actualInfo = geoip.lookup(ip4);
        console.log(actualInfo);
        should.exist(actualInfo);
        should(actualInfo.country).eql('SG');
        should(actualInfo.ChineseName).eql('新加坡');
        done();
    });

    it('Japan ipv4 address', function (done) {
        var ip4 = '203.140.175.154';
        var actualInfo = geoip.lookup(ip4);
        console.log(actualInfo);
        should.exist(actualInfo);
        should(actualInfo.country).eql('JP');
        should(actualInfo.ChineseName).eql('日本');
        done();
    });

    it('Thailand ipv4 address', function (done) {
        var ip4 = '118.175.255.10';
        var actualInfo = geoip.lookup(ip4);
        console.log(actualInfo);
        should.exist(actualInfo);
        should(actualInfo.country).eql('TH');
        should(actualInfo.ChineseName).eql('泰国');
        done();
    });

    it('Vietnam ipv4 address', function (done) {
        var ip4 = '125.214.18.243';
        var actualInfo = geoip.lookup(ip4);
        console.log(actualInfo);
        should.exist(actualInfo);
        should(actualInfo.country).eql('VN');
        should(actualInfo.ChineseName).eql('越南');
        done();
    });

    it('Brazil ipv4 address', function (done) {
        var ip4 = '200.180.201.106';
        var actualInfo = geoip.lookup(ip4);
        console.log(actualInfo);
        should.exist(actualInfo);
        should(actualInfo.country).eql('BR');
        should(actualInfo.ChineseName).eql('巴西');
        done();
    });

    it('Taiwan ipv4 address', function (done) {
        var ip4 = '163.29.225.250';
        var actualInfo = geoip.lookup(ip4);
        console.log(actualInfo);
        should.exist(actualInfo);
        should(actualInfo.country).eql('TW');
        should(actualInfo.ChineseName).eql('中国台湾');
        done();
    });


    it('Hong Kong ipv4 address', function (done) {
        var ip4 = '219.78.255.255';
        var actualInfo = geoip.lookup(ip4);
        console.log(actualInfo);
        should.exist(actualInfo);
        should(actualInfo.country).eql('HK');
        should(actualInfo.ChineseName).eql('中国香港');
        done();
    });

    it('Iran ipv4 address', function (done) {
        var ip4 = '80.191.169.96';
        var actualInfo = geoip.lookup(ip4);
        console.log(actualInfo);
        should.exist(actualInfo);
        should(actualInfo.country).eql('IR');
        should(actualInfo.ChineseName).eql('伊朗');
        done();
    });

    it('India ipv4 address', function (done) {
        var ip4 = '210.212.101.139';
        var actualInfo = geoip.lookup(ip4);
        console.log(actualInfo);
        should.exist(actualInfo);
        should(actualInfo.country).eql('IN');
        should(actualInfo.ChineseName).eql('印度');
        done();
    });


    it('Indonesia ipv4 address', function (done) {
        var ip4 = '202.179.184.11';
        var actualInfo = geoip.lookup(ip4);
        console.log(actualInfo);
        should.exist(actualInfo);
        should(actualInfo.country).eql('ID');
        should(actualInfo.ChineseName).eql('印度尼西亚');
        done();
    });


    it('American ipv6 address', function (done) {
        var ip6 = '2001:4860:b002::68';
        var actualInfo = geoip.lookup(ip6);
        console.log(actualInfo);
        should.exist(actualInfo);
        should(actualInfo.country).eql('US');
        should(actualInfo.ChineseName).eql('美国');
        done();
    });
});

