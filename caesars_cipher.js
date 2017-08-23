/*
 * 凯撒密码
 *（让上帝的归上帝，凯撒的归凯撒）
 *下面我们来介绍风靡全球的凯撒密码Caesar cipher，又叫移位密码。
 *移位密码也就是密码中的字母会按照指定的数量来做移位。
 *一个常见的案例就是ROT13密码，字母会移位13个位置。
 *由'A' ↔ 'N', 'B' ↔ 'O'，以此类推。
*/

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
