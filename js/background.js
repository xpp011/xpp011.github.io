var backgroundArray=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
var i=0;
document.onkeydown = keyDownSearch;
        function keyDownSearch(e) {
            // 兼容FF和IE和Opera    
            var theEvent = e || window.event;
            var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
            // 13 代表 回车键
            if (code == 13) {

                //获取body对象
                var body=document.body;
                i++;
                // 不超过数组长度
                i=i%backgroundArray.length;
                body.style.backgroundImage = "url(/images/"+backgroundArray[i]+")";
                // 要执行的函数 或者点击事件
                // alert(i+" : "+backgroundArray[i]);
            }
            // console.log(code);
        }


// 打印机效果
// var title=document.getElementsByClassName("site-subtitle")[0];

// var msg="一只小菜鸟~~~";
// var len=msg.length;
// var i=1;
// function write(t){
//     var val=msg.substring(0,i);
//     //清除定时
//     title.innerText=val;
//     if(i>=len){clearInterval(t);}
//     else {i++;}
// }

// function time(){
//     //设置定时
//     var t=setInterval(function(){write(t)},700);
// }
var binft = function (r) {
    function t() {
      return b[Math.floor(Math.random() * b.length)]
    }  
    function e() {
      return String.fromCharCode(94 * Math.random() + 33)
    }
    function n(r) {
      for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
        var l = document.createElement("span");
        l.textContent = e(), l.style.color = t(), n.appendChild(l)
      }
      return n
    }
    function i() {
      var t = o[c.skillI];
      c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d)
    }
    var l = "",
    o = ["一只小菜鸟~_~", "一只小菜鸟#_#","一只小菜鸟*_*", "一只小菜鸟^_^","一只小菜鸟&_&","一只小菜鸟%_%","一只小菜鸟￥_￥","一只小菜鸟@_@"].map(function (r) {
    return r + ""
    }),
    a = 2,
    g = 1,
    s = 5,
    // 每次执行时间
    d = 75,
    b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
    c = {
      text: "",
      prefixP: -s,
      skillI: 0,
      skillP: 0,
      direction: "forward",
      delay: a,
      step: g
    };
    i()
    };
    binft(document.getElementsByClassName("site-subtitle")[0]);