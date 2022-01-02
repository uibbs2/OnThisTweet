javascript:(
  function(){
    var qy=1;       // how many years get back? You can set different bookmarklets for 1 year, 2 years, 3 years etc.
    var ch='g_sr';  // your twitter username
    var og=new Date();   og.setFullYear(og.getFullYear()-qy);   // today, but one year ago
    var ie=new Date(og); ie.setDate(ie.getDate()-1);            // yesterday, but one year ago (needed to the search algorithm)
    // known bugs: on Jan 1st will present og as Dec 32nd, ie is correct as Dec 31st...
    // will try some workaround
    
    window.open('https://twitter.com/search?src=typed_query&q=(from%3A'+ch+')%20until%3A'+(og.getFullYear())+'-'+(og.getMonth()+1)+'-'+(og.getDate()+1)+'%20since%3A'+(ie.getFullYear())+'-'+(ie.getMonth()+1)+'-'+(ie.getDate()+1));
  })
();
