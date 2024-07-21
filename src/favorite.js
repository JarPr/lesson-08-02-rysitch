import { common } from './common';
import { createMarcup } from './helpers/createMarcup';
import { createModal } from './helpers/createModal';
import { instruments } from './helpers/instruments'


const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarcup(favorite, list);
list.addEventListener('click', onclick);

function onclick(evt) {
    if (evt.target.classList.contains('js-info')) {
    const { id } = evt.target.closest('.js-card').dataset;
    // console.log(id);
    const product = findProduct(Number(id));
    // console.log(product);
    createModal(product);
    }
};

function findProduct(productID) {
  return instruments.find(({ id }) => id === productID);
}