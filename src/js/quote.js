"use strict";

const paragraph = document.querySelector('.hero-third-container-text');
const author = document.querySelector('.hero-third-container-author');
const STORAGE_KEY = 'backend-feedback';


/*
блок з цитатою дня містить: 
    цитату, яку треба отримувати з бекенду і зберігати в локалсторідж разом із датою, 
    яку в подальшому слід перевіряти - і якщо дата не змінилась - не робити запит на бекенд 
    зображеннння, яке слід реалузувати, як фонове. 
*/

/* отримуємо цитату з бекенду*/

const url = 'https://energyflow.b.goit.study/api/quote'; 
console.log(url);

if(new Date() !== JSON.parse(localStorage.getItem(STORAGE_KEY)).date){
    fetch(url)
    .then(response => {
   
      if (!response.ok) {
        throw new Error('Request is not ok');
      }

      return response.json();
    })

    .then(text => {
    let dateTime = new Date();
    let arrInfSet = {
        quote: text.quote,
        author: text.author,
        date: dateTime,
    }  
    localStorage.setItem('backend-feedback', JSON.stringify(arrInfSet));
        return;
      }   
    )
    .then(text => {
      const obj = JSON.parse(localStorage.getItem(STORAGE_KEY));
      paragraph.textContent = obj.quote;
      author.textContent = obj.author;
      return;  
    })
    .catch(error => {
        console.log(error);
    }); 
};

