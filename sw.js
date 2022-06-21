/*self.addEventListener('install', function(e) {
  console.log("Installed SW!")
})
self.addEventListener('fetch', function (ev) {
  console.log("Incoming event! " + ev);
  let url = ev.request.url;
  let theurl = url.replace(`https://portfolio-page.oklolnojoe39.repl.co/blog/`,'').replace('/','')
  
  ev.respondWith(
      new Response(`<h1>my blog! ${theurl}</h1>`, {
        headers: {'Content-Type': 'text/html'}
      })
   )
}*/