const getNews = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=techcrunch&apiKey=affcf3bba7364c178fa3532776ac1119`
    );

    console.log(response);

    if (response.status === 200) {
      const news = await response.json();

      let noticias = "";
      news.articles.forEach((news) => {
        noticias += `
          <div class="news-card">            
            <h1>${news.title}</h1>
            <h2>${news.author}</h2>
            <p>${news.description}</p>
            <p><a href="${news.url}" target="_blank" >Leer la noticia completa</a></p>      
            <img id="image" src="${news.urlToImage}" alt="Imagen de la noticia"/> 
          </div>`;
      });

      document.getElementById("news-container").innerHTML = noticias;
    } else {
      let message = "<h1>Ha ocurrido un error inesperado. Mil disculpas.</h1>";
      document.getElementById("news-container").innerHTML = message;
    }
  } catch (error) {
    console.log(error);
  }
};

getNews();
