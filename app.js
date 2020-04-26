document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJSON);
document.getElementById('button3').addEventListener('click',getAPI);

const output = document.getElementById('output');

// Get local text file data
function getText(){
    fetch('test.txt')
    .then(res => res.text())
    .then(data =>   output.innerHTML = data)
    .catch(err => console.log(err))
}


// Get local JSON data
function getJSON(){
    fetch('post.json')
    .then(res => res.json())
    .then(data =>{
        let out = '';
        data.forEach(function(post){
            out +=  ` <li>${post.title}</li>
            <p>${post.body}</p>
            `
        })
        output.innerHTML = out;
    })
    .catch((err) => console.log(err))
}

// Get external API
function getAPI(){[
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data =>{
        //console.log(data);
        let out = '';
        data.forEach(function(user){
            out += `<li>${user.login}</li>`
        })
        output.innerHTML = out;
    })
    .catch((err) => console.log(err))
]}