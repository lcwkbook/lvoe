
let divTyping = document.getElementById('present')
  let i = 0,
    timer = 0,
    str = '愿XXX和小权永远在一起'
 
  function typing () {
    if (i <= str.length) {
      divTyping.innerHTML = str.slice(0, i++) + '_'
      timer = setTimeout(typing, 250)
    }
    else {
      divTyping.innerHTML = str//结束打字,移除 _ 光标
      clearTimeout(timer)
    }
  }
 
  typing()