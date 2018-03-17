var button = document.getElementById("button");
//console.log("button", button);

button.addEventListener("click", function(){
  var input = document.getElementById("search");
  var searchTerm = input.value;
  console.log('searchTerm is: ', searchTerm)
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + 'api-key='+ "b9b0fdd8564742c796d6fa46a983471c" + "&fq=" + searchTerm;
  $.get(url, function(data){
    // console.log("data: ", data.response.docs);
    var newsArray = data.response.docs;

    var divs = [];
    for(var i = 0; i < newsArray.length; i++){
      console.log(newsArray[i].multimedia);
      // list+= "<a target='_blank' href="+ link +" >" + "<li>" + newsArray[i].headline.main + "</li>" + "</a>"
      var link = newsArray[i].web_url;
      var imgMain = "https://www.nytimes.com/";
      var imgURL = (newsArray[i].multimedia[0])? newsArray[i].multimedia[0].url : "";
      var noImgFound = "http://emodularkitchen.com/img/uploads/posts/404%20.jpg"
      var newDiv = document.createElement("div")
      var childDiv = document.createElement("div");
      var a = document.createElement("a");
      var h5 = document.createElement("h5");
      var image = document.createElement("img");
      var br = document.createElement("br");
      var p = document.createElement("p");

      a.href = link;
      image.classList.add("card-img-top");
      image.src = (imgURL)?  imgMain + imgURL : noImgFound;
      h5.classList.add("card-title");
      h5.innerText = newsArray[i].headline.main;
      p.classList.add("card-text");
      p.innerText = newsArray[i].snippet;
      newDiv.classList.add("card");
      newDiv.style.width= "18rem";
      childDiv.classList.add("card-body")
      a.appendChild(h5);
      childDiv.appendChild(a);
      childDiv.appendChild(p);
      newDiv.appendChild(image);
      newDiv.appendChild(childDiv);
      divs.push(newDiv, br);

    }

    console.log("divs array: ", divs)
    var results = document.getElementById("results");
    // results.appendChildren();
     divs.forEach(div => results.appendChild(div));
  })
})
