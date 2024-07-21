import { common } from './common';
import { createMarcup } from './helpers/createMarcup';
import { createModal } from './helpers/createModal'
import { instruments } from './helpers/instruments'


const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
createMarcup(instruments, list);
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];


list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const { id } = evt.target.closest('.js-card').dataset;
    // console.log(id);
    const product = findProduct(Number(id));
    // console.log(product);
    createModal(product);
  }
  if (evt.target.classList.contains('js-basket')) {
    const { id } = evt.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    basketArr.push(product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
  }
  if (evt.target.classList.contains('js-favorite')) {
    const { id } = evt.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    };
    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));    
  }
}


function findProduct(productID) {
  return instruments.find(({ id }) => id === productID);
}











