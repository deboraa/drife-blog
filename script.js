

  var app = document.getElementById('root');
  var logo = document.createElement('img');
logo.src = 'https://drife.co.id/wp-content/themes/Drife/library/images/drife-logo.png';
var container = document.createElement('div');
container.setAttribute('class', 'container');
// // app.appendChild(logo);
// app.appendChild(container);


  var url = 'https://drife.co.id/wp-json/wp/v2/posts';
  fetch(url)
  .then(Response => {
    return Response.json()
  })
  .then(function (data) {
    console.log(data)
    let result ='';
    data.forEach((article) => {
      console.log(article.id)
      result +=
      `
      <div class="col-12 col-md-4 col-lg-4 mb-5">
      <div class="card">
              <img src="test.jpg" class="card-img-top thumb-img" alt="">
          <div class="card-body thumb-text px-2 py-1">
              <span class="date small">
                  ${article.date}
              </span>
              <p class="paragraph">
                  ${article.title.rendered}
              </p>
              <a class="link-more small" href="${article.link}">Learn More</a>
          </div>
          <div class="card-tag">
              <span class="tag">
                  DIGITAL MARKETING
              </span>
          </div>
      </div>
  </div>
      `
      article.categories.forEach(function(categorie){
        console.log(categorie)
      });
      ;
      document.getElementById('result').innerHTML = result;
    });

    console.log(data)
  
    return data.map(function(data) {
        console.log(data.cell)
        const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = blog.cell
    
      // Create a p and set the text content to the film's description
      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300) // Limit to 300 chars
      p.textContent = `${movie.description}...` // End with an ellipses
    
      // Append the cards to the container element
      container.appendChild(card)
    
      // Each card will contain an h1 and a p
      card.appendChild(h1)
      card.appendChild(p)

    //   let li = createNode('li'),
    //       img = createNode('img'),
    //       span = createNode('span');
    //   img.src = author.picture.medium;
    //   span.innerHTML = `${author.name.first} ${author.name.last}`;
    //   append(li, img);
    //   append(li, span);
    //   append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });   