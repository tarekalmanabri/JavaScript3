'use strict';
const url = 'https://www.randomuser.me/api';

function getXmlRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function() {
        if (this.status == 200) {
            const res = JSON.parse(this.response)
            console.log(res)
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
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        });
}

getAxios();