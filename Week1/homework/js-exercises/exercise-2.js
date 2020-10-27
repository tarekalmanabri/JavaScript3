'use strict';
const firstDiv = document.getElementById('div-1');
const secondDiv = document.getElementById('div-2');
const url = 'https://xkcd.now.sh/?comic=latest';

function getXmlRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function() {
        if (this.status == 200) {
            const res = JSON.parse(this.response)
            const newImg = document.createElement('img');
            console.log(res);
            newImg.setAttribute('src', res.img);
            firstDiv.appendChild(newImg);
        } else {
            console.log(this.response)
        }
    }
    xhr.send();
}
getXmlRequest();

function getAxios() {
    axios.get(
            url
        )
        .then(function(response) {
            const newImg = document.createElement('img');
            console.log(response)
            newImg.setAttribute('src', response.data.img);
            secondDiv.appendChild(newImg);
        })
        .catch(function(error) {
            console.log(error)
        });
}
getAxios();