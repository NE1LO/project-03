"use strict";

const quote = document.querySelector('.hero-third-container-text');
const icons = document.querySelector('.hero-third-container-quotesSvg');
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

fetch(url)
    .then(response => {
   
      if (!response.ok) {
        throw new Error('Request is not ok');
      }

      return response.json();
    })

    .then(text => {
    let dateTime = new Date();
    let arrInfSet ={
        quote: text.quote,
        author: text.author,
        date: dateTime,
    }  
    console.log(arrInfSet);
    localStorage.setItem('backend-feedback', JSON.stringify(arrInfSet));
        return ;
      }   
    )
    .then(value => {
        const objToArray = Array.from(value);
        console.log(objToArray);
    })
    .catch(error => {
        console.log(error);
    });
      
    

   /* icons.insertAdjacentHTML('afterend', addImages(text);*/

    function addQuates(text) {
        return text.reduce((html, tex) => html + `
        <p class="hero-third-container-text">
            ${tex.quote}
            <span class="hero-third-container-author">${tex.author}</span>
        </p>
        `, "");
      }