fetch('./blogs.json').then(response => {
  
  return response.json();
}).then(data => {
  
    for (var i = 0; i < data.length; i++) {
    let post = data[i];
    let divpost = document.createElement('div')
    divpost.classList.add('blog');
      /*
    if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', {
    scope: '/blog/' + post.realtitle + "/"
  }).then(function(callback){
    console.log(callback)
    callback.update();
  })
}*/
    divpost.addEventListener('click',() => {
      location.href = '/blog/' + post.realtitle + "/"
    })
    let title = document.createElement('h1')
    title.textContent = post.title
    let desc = document.createElement('h2')
    desc.style='font-size: 1.3em;'
    desc.textContent = post.description
    divpost.appendChild(title)
    divpost.appendChild(desc)
    console.log(divpost)
    console.log(document.querySelector('.blogposts'))
    document.querySelector('.blogposts').appendChild(divpost)
    /*
  <div class='blog'>
       <h1>Blog post #1</h1>
       <h2 style='font-size: 1.3em;'>example</h2>
     </div>
*/
  }
})
