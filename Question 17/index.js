var s = [
  {
    rollNo: 6,
    name: "Prajwal Jagtap",
    age: 19,
    gender: "Male",
    favItCompany: "Wipro India",
    githubUrl: "https://api.github.com/users/PJ9172",
    mailId: "rohitjagtap5000@gmail.com",
    birthDate: "22-06-2004",
    avatar: "https://avatars.githubusercontent.com/u/147252354?v=4",
    profile:"https://github.com/PJ9172"
    
  },
  {
    rollNo: 5,
    name: "Ashwini Yadav",
    age: 21,
    gender: "Female",
    favItCompany: "Tech Mahindra India",
    githubUrl: "https://api.github.com/users/ashwini6777",
    mailId: "ashwiniyadav3703@gmail.com",
    birthDate: "29-01-2003",
    avatar: "https://avatars.githubusercontent.com/u/147252354?v=4",
    profile:"https://github.com/ashwini6777"
    
  },
  {
    rollNo: 4,
    name: "Sanjana Hodbe",
    age: 19,
    gender: "Female",
    favItCompany: "Persistent systems Limited",
    githubUrl: "https://api.github.com/users/SH3422",
    mailId: "sanjanahodbe@gmail.com",
    birthDate: "06-03-2004",
    avatar: "https://avatars.githubusercontent.com/u/147395950?v=4",
  },
  {
    rollNo: 3,
    name: "Farzana Shaikh",
    age: 21,
    gender: "female",
    favItCompany: "Talentica software ",
    githubUrl: "https://api.github.com/users/Fara776",
    mailId: "farashaikh564@gmail.com",
    birthDate: "14-01-2003",
    avatar: "https://avatars.githubusercontent.com/u/145984007?v=4",
    profile:"https://github.com/Fara-776"
    
  },
  {
    rollNo: 2,
    name: "Sharifa Shaikh",
    age: 21,
    gender: "female",
    favItCompany: "Cognizant",
    githubUrl: "https://api.github.com/users/shara762",
    mailId: "shaikhsharifa762@gmail.com",
    birthDate: "14-01-2003",
    avatar: "https://avatars.githubusercontent.com/u/145984673?v=4",
    profile:"https://github.com/shara762"
  },
  {
    rollNo: 1,
    name: "Mosin Balsing",
    age: 19,
    gender: "Male",
    favItCompany: "Tcs",
    githubUrl: "https://api.github.com/users/Mosin-M-B",
    mailId: "mosinbalsing@gmail.com",
    birthDate: "13-03-2004",
    avatar: "https://avatars.githubusercontent.com/u/119176708?v=4",
    profile:"https://github.com/Mosinbalsing"
    
  },
];
var main = document.getElementById("main")
s.map((ele , index)=>{
  
  //creating card
  var card = document.createElement("div");
  card.className="card";  

  //inserting image in card
  var img = document.createElement("div");
  img.className= "card-img"
  img.innerHTML = `<img src="${ele.avatar}" alt="profile image">`
  card.append(img);

  //information of card
  var cardinfo = document.createElement("div");
  cardinfo.className ="card-info";
  card.append(cardinfo);

  //inserting title in card
  var pname = document.createElement("p");
  pname.className = "text-title"
  pname.innerText = ele.name
  cardinfo.append(pname)

  var pbd = document.createElement("p");
  pbd.className = "text-body"
  pbd.innerHTML = `<b>D-O-B:</b>${ele.birthDate}`
  cardinfo.append(pbd)

  var ptext = document.createElement("p");
  ptext.className = "text-body"
  ptext.innerHTML = `${ele.favItCompany}`
  cardinfo.append(ptext)


  var pmail = document.createElement("p")
  pmail.className = "text-body"
  pmail.innerHTML = `${ele.mailId}`
  cardinfo.append(pmail)

  var footer = document.createElement("div");
  footer.className = "card-footer"

  var span = document.createElement("span");
  span.className= "text-title"
  span.innerHTML = `<p>Age: ${ele.age}</p>`
  footer.append(span)

var btn = document.createElement("div");
btn.className = "card-button"
btn.innerHTML= `<a href="${ele.profile}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>`
footer.append(btn)
 
  card.append(cardinfo);
  card.append(footer)
  main.append(card);

})
// console.log(s);