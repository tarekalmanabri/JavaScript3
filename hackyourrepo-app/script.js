"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/
const placeholderRepos = [{
        name: 'SampleRepo1',
        description: 'This repository is meant to be a sample',
        forks: 5,
        updated: '2020-05-27 12:00:00',
    },
    {
        name: 'AndAnotherOne',
        description: 'Another sample repo! Can you believe it?',
        forks: 9,
        updated: '2020-05-27 12:00:00',
    },
    {
        name: 'HYF-Is-The-Best',
        description: "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
        forks: 130,
        updated: '2020-05-27 12:00:00',
    },
];

const select = document.getElementById('select');
// const contributors = document.getElementById('contributors');
// const repoInfo = document.getElementById('repoInfo');
const repositoryName = document.getElementById('repositoryName');
const descriptionName = document.getElementById('descriptionName');
const forksName = document.getElementById('forksName');
const updatedName = document.getElementById('updatedName');
select.addEventListener('change', filTheField)

function filTheField() {
    const selectValue = select.value
    for (let i = 0; i < placeholderRepos.length; i++) {
        let obj = placeholderRepos[i];
        if (selectValue == i) {
            repositoryName.innerText = obj.name;
            descriptionName.innerText = obj.description;
            forksName.innerText = obj.forks;
            updatedName.innerText = obj.updated;
        }
    }
}
filTheField();

//the commented variables are to use in the next weeks.