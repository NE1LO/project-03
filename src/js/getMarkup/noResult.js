const list = document.querySelector('.render-page-one-list');
const listBtn = document.querySelector('.render-btn-list-pagination');

export const noResult = () => {
  const markup = `<p class="render-page-one-no">
  Unfortunately, <span class="render-page-one-no-part">no results</span> were
  found. You may want to consider other search options to find the exercise you
  are looking for. Our range is wide and you have the opportunity to find more
  options that suit your needs.
</p>`;
  list.innerHTML = markup;
  listBtn.style.display = 'none';
};
