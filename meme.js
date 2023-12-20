
const generateMemeBtn=document.querySelector(".meme-genetor .generate-meme-btn");
const memeimage=document.querySelector(".meme-genetor img");
const memeAuthor=document.querySelector(".meme-genetor  .meme-author");
const memeTitle=document.querySelector(".meme-genetor .meme-title");
const updateDetails=(url,title,author)=>{
    memeimage.setAttribute("src",url);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML= `Meme by: ${author}`;

}
const generateMeme=()=>{
   fetch("https://meme-api.com/gimme/wholesomememes").then(

(response) => response.json())
.then(data =>{
    updateDetails(data.url, data.title,data.author);

})
}
generateMemeBtn.addEventListener("click", generateMeme )
generateMeme();
 
