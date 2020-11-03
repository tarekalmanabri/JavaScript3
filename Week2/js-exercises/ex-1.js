'use strict'

function getAnonName(firstName) {

    return new Promise((resolve, reject) => {
            if (firstName) {
                resolve(`${firstName}`)
            } else {
                reject("You didn't pass in a first name!")
            }
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}
getAnonName()