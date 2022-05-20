let news = {
    "apiKey": "af8feef77ea148c29557afaef6efa3c1",
    fetchNews: function (tag) {
        fetch(
            "https://newsapi.org/v2/everything?q=" + tag + "&apiKey=" + this.apiKey
        ).then((response) => response.json()).then((data) => this.displayNews(data));
    },
    displayNews: function (data) {
        
        for (i = 0; i < data.articles.length; i++) {
            this.addArticle(data.articles[i],i);
        }

    },
    displayArticle: function (article) {
        const { title } = article;
        const { name } = article.source;
        const { url } = article;
        const { urlToImage } = article;
        console.log(title, name, url, urlToImage);
    },
    addArticle: function (article,i) {
        const { title } = article;
        const { name } = article.source;
        const { url } = article;
        const { urlToImage } = article;
        const { description } = article;
        if(i===0)
        {
            document.querySelector(".main").innerHTML += 
        `   <div class="element first">
                <h2><a href="${url}" target="_blank" class="linkTag">${title}</a></h2>
                <img src="${urlToImage}" alt="">
                <p>${description}</p>
                <h3>Source: ${name}</h3>
            </div>
        `
        }
        else
        {
            document.querySelector(".main").innerHTML += 
        `   <div class="element">
                <h2><a href="${url}" target="_blank" class="linkTag">${title}</a></h2>
                <img src="${urlToImage}" alt="">
                <p>${description}</p>
                <h3>Source: ${name}</h3>
            </div>
        `
        }
    }
}

document.querySelector(".searchBtn").addEventListener("click", function () {
    document.querySelector(".main").innerHTML=``;
    news.fetchNews(document.querySelector(".searchBar").value);
})
document.querySelector(".searchBar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        document.querySelector(".main").innerHTML=``;
        news.fetchNews(document.querySelector(".searchBar").value);
    }
})