const generateMemeBtn = document.querySelector(
    "#but"
  );
  const memeImage = document.querySelector("#meme");
  const memeTitle = document.querySelector("#title");
  const memeAuthor = document.querySelector("#author");
  
  const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
  };
  
  const generateMeme = () => {
    fetch("https://meme-api.com/gimme")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
  };
  
  generateMemeBtn.addEventListener("click", generateMeme);
  
  generateMeme();