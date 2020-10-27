'use strict';
const url = 'https://dog.ceo/api/breeds/image/random'
const firstBtn = document.getElementById('btn1').addEventListener('click', getXmlRequest);
const secondBtn = document.getElementById('btn2').addEventListener('click', getAxios);
const ul = document.getElementById('ul');

function addDogImage(src) {
    const li = document.createElement('li');
    const newImg = document.createElement('img');
    newImg.setAttribute('src', src);
    li.style.listStyle = 'none';
    newImg.style.borderRadius = '20px'
    newImg.style.maxWidth = '500px'
    li.appendChild(newImg)
    ul.appendChild(li)
}

function getXmlRequest() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function() {
        if (this.status == 200) {
            const res = JSON.parse(this.response)
            console.log(res)
            addDogImage(res.message);
        } else {
            console.log(this.response)
        }
    }
    xhr.send();
}

function getAxios() {
    axios.get(
            url
        )
        .then(function(response) {
            console.log(response);
            addDogImage(response.data.message);
        })
        .catch(function(error) {
            console.log(error)
        });
}