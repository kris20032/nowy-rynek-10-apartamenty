/* Nowy Rynek 10 — drobna interaktywność (nav, lightbox, filtry) */
(function(){
  // mobilne menu
  var burger=document.querySelector('.nav-burger');
  var links=document.querySelector('.nav-links');
  if(burger&&links){
    burger.addEventListener('click',function(){links.classList.toggle('open');});
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){links.classList.remove('open');});
    });
  }

  // lightbox dla galerii / masonry
  var lb=document.querySelector('.lb');
  if(lb){
    var lbImg=lb.querySelector('img');
    document.querySelectorAll('[data-lb]').forEach(function(im){
      im.addEventListener('click',function(){
        lbImg.src=im.getAttribute('data-lb')||im.src;
        lbImg.alt=im.alt||'';
        lb.classList.add('on');
      });
    });
    function close(){lb.classList.remove('on');}
    lb.addEventListener('click',close);
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  }

  // filtry apartamentów
  var filts=document.querySelectorAll('.filt');
  if(filts.length){
    var items=document.querySelectorAll('[data-tags]');
    filts.forEach(function(b){
      b.addEventListener('click',function(){
        filts.forEach(function(x){x.setAttribute('aria-pressed','false');});
        b.setAttribute('aria-pressed','true');
        var f=b.getAttribute('data-filter');
        items.forEach(function(it){
          var show=(f==='all')||it.getAttribute('data-tags').indexOf(f)>-1;
          it.style.display=show?'':'none';
        });
      });
    });
  }
})();
