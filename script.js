/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', {
    scope: '/blog/'
  }).then(function(callback){
    console.log(callback)
    callback.update();
  })
}
navigator.serviceWorker.onmessage = (message) => {
    console.log(message);
};*/