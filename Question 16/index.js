var id = document.getElementById("id")
var login = document.getElementById("login")
var Name = document.getElementById("name");
var img = document.getElementById("img")

const url= "https://api.github.com/users/Mosin-M-B"
async function add() {
    try {
        const responce =await fetch(url)
        const result = await responce.json();
        console.log(result);
        id.innerHTML=`<h1>ID :${result.id}</h1>`
        login.innerHTML=`<h1>login :${result.login}</h1>`
        Name.innerHTML=`<h1>Name :${result.name}</h1>`
        img.innerHTML=`<img src="${result.avatar_url}"/>`
    } catch (error) {
        console.log(error);
    }
} 
add()
