/**
 * Created by finup on 2018/3/29.
 */
const fs = require('fs');
const readline = require('readline');
const http = require('http');
// const iconv = require('iconv-lite');

const r1 = readline.createInterface({
  input: fs.createReadStream("test.csv")
});

var i = 1;
var arr = [];
r1.on('line', (line) => {
 // console.log(Buffer.isBuffer(line))
 //  console.log(iconv.decode(line, 'gbk').length)
  let lineData = line.split(',');
  // const buff = new Buffer(lineData.split(' ')[15])
  var path = `/api/v2/setRequestIdState/${lineData[2]}/qianzhan/jingdong/${lineData[1]}/4`
  console.log(path);

  // console.log(path === '/api/v2/setRequestIdState/32455483');
  // console.log(lineData.split(' ')[15],typeof (lineData.split(' ')[15]),parseInt(lineData.split(' ')[15].toString()), (lineData.split(' ')[15].toString()).length)
  var options = {
    host:'http://puhui-holmes-risk-assess.holmes.test',
    method:'POST',
    path: path
  }
  const req = http.request(options, (res) => {

  });

  req.on('error', (e) => {
    console.log('请求遇到问题', e.message);
  });

  req.end();
});
