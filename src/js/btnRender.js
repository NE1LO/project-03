const listBtn = document.querySelector('.render-btn-list-pagination');

export const btnRender = (totalPage, page, numbers) => {
  let markup = '';
  if (totalPage === 1) {
    listBtn.innerHTML = ` <li>
        <button 
          class="render-pagination-btn render-pagination-btn-active"
          type="button"
        >1</button></li>`;
    return;
  }
  let light = totalPage < 2 ? totalPage : 3;
  for (let i = 0; i < light; i++) {
    let ind = page;
    if (i === 0) ind--;
    if (i === 1) ind = page;
    if (i === 2) ind++;

    let btn = ` <li>
        <button data-num="${i}"
          class="render-pagination-btn"
          type="button"
        >${ind}</button></li>`;
    markup += btn;
  }
  listBtn.innerHTML = markup;
  listBtn.children[1].children[0].classList.add('render-pagination-btn-active');
  if (listBtn.children[0].children[0].textContent === '0') {
    listBtn.children[page - 1].children[0].remove();
  } else if (parseInt(page) === totalPage) {
    listBtn.children[2].children[0].remove();
  }
};
