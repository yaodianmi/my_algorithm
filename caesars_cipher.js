/*
 * 凯撒密码
 *（让上帝的归上帝，凯撒的归凯撒）
 *下面我们来介绍风靡全球的凯撒密码Caesar cipher，又叫移位密码。
 *移位密码也就是密码中的字母会按照指定的数量来做移位。
 *一个常见的案例就是ROT13密码，字母会移位13个位置。
 *由'A' ↔ 'N', 'B' ↔ 'O'，以此类推。
 *所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号),
 *遇到这些特殊字符，跳过它们。
 *rot13("SERR PBQR PNZC") 应该解码为 "FREE CODE CAMP"
 *rot13("SERR CVMMN!") 应该解码为 "FREE PIZZA!"
 *rot13("SERR YBIR?") 应该解码为 "FREE LOVE?"
 *rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") 应该解码为 "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
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


