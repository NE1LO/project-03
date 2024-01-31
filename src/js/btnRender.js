const listBtn = document.querySelector('.render-btn-list-pagination');

export const btnRender = (totalPage, page) => {
  let markup = '';
  for (let i = 1; i <= totalPage; i++) {
    let btn = ` <li>
        <button
          class="render-pagination-btn"
          type="button"
        >${i}</button></li>`;
    markup += btn;
  }
  listBtn.innerHTML = markup;
  listBtn.children[page - 1].children[0].classList.add(
    'render-pagination-btn-active'
  );
};
