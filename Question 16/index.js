var id = document.getElementById("id");
var login = document.getElementById("login");
var Name = document.getElementById("name");
var img = document.getElementById("img");

const url = "https://api.github.com/users/Mosinbalsing";
async function add() {
  try {
    const responce = await fetch(url);
    const result = await responce.json();
    console.log(result);
    id.innerHTML = `<h1>ID :${result.id}</h1>`;
    login.innerHTML = `<h1>login :${result.login}</h1>`;
    Name.innerHTML = `<h1>Name :${result.name}</h1>`;
    img.innerHTML = `<img src="${result.avatar_url}"/>`;
  } catch (error) {
    console.log(error);
  }
}
add();

const students = [{
    rollNo: 14,       
    name: "Mosin Balsing",
    age: 19,
    gender: "Male",
    favItCompany: "Wipro India",   
    githubUrl: "https://api.github.com/users/Mosin-M-B",   
    mailId: "mosinbalsing@gmail.com",
    birthDate: "13-03-2004",
    avatar :"https://avatars.githubusercontent.com/u/119176708?v=4"
  }]