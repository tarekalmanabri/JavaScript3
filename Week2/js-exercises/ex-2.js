'use strict'

function checkDoubleDigits(number) {
    return new Promise((resolve, reject) => {
            if (number > 10) {
                resolve("The number is bigger than 10!")
            } else if (number === 10) {
                resolve('It is 10!')
            } else {
                reject("Error! The number is smaller than 10...")
            }
        }).then((res) =>
            console.log(res))
        .catch((err) => {
            console.log(err)
        })
}

checkDoubleDigits(11)