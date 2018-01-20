(function(){
    var clientWidth = document.documentElement.clientWidth
    var style = document.createElement('style')
    style.innerHTML = 'html{font-size:'+clientWidth/10+'px}'
    document.head.appendChild(style)
})()