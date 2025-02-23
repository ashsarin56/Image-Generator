const accesskey="2PayCvsff5xQGqi5c80xPCKVzafJkYc2mUtCISNv4HQ";
const form=document.querySelector("form");
const display=document.querySelector(".display"); 
const inp=document.querySelector(".find-inp");
const sbtn=document.querySelector(".find");
const mbtn=document.querySelector(".more");
let tofind=inp.value;
let p=1;
async function searching(){
    tofind=inp.value;
    if(tofind === ""){
        alert("Please enter a search term!");
        return;
    }
    const url=`https://api.unsplash.com/search/photos?page=${p}&query=${tofind}&client_id=${accesskey}`;
    try{
    const response=await fetch(url);
    const data= await response.json();
    const results=data.results;
    if(p==1){
        display.innerHTML="";
    }
    results.map((x)=>{
        const wrapit=document.createElement("div");
        wrapit.classList.add("card");
        const image=document.createElement("img");
        image.src=x.urls.small;
        image.alt=x.alt_description;
        const footer=document.createElement("a");
        footer.href=x.links.html;
        footer.target="_blank";
        footer.textContent=x.alt_description;   
        wrapit.appendChild(image);
        wrapit.appendChild(footer);
        display.appendChild(wrapit);
    });
    p++;
    if(p>1){
        mbtn.style.display="block";
    }
    console.log("searching");
    }
    catch(error){
        console.error("Error fetching images:", error);
        alert("Failed to fetch images. Please try again.");
    }
}
// sbtn.addEventListener('click',function(e){
//      e.preventDefault();
// });
sbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    p=1;
    searching();
})
mbtn.addEventListener("click",(e)=>{
    searching();
})