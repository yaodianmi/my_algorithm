function rot13(str) {
  var re = /[\W_]/g;
  var t = 13;
  var newStr = [];
  for (var i = 0; i < str.length; i++) {
    var s = '';
    if (str[i].search(re) === -1) {
      var num = str.charCodeAt(i);
      if (num + t <= 90) {
        num += t;
      } else {
        num -= t;
      }
      s = String.fromCharCode(num);
    } else {
      s = str[i];
    }
    newStr.push(s);
  }
  

  return newStr.join('');
}
