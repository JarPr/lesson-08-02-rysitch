function createMarcup(arr, list) {
    let marcup;
    if (arr.length) {
        marcup = arr.map(({ id, img, name }) =>
        `<li data-id="${id}" class="js-card">
          <img src="${img}" alt="${name}" width="300">
          <h2>${name}</h2>
           <p><a href="#" class="js-info">More information</a></p>
           <div>
             <button class="js-favorite">Add to favorite</button>
             <button class="js-basket">Add to basket</button>
           </div>
        </li>`).join('');
    } else {
       marcup = `<li>
          <img src="https://kurtrees.wordpress.com/wp-content/uploads/2013/04/black-and-white-empty-empty-heart-heart-favim-com-501667.jpg" alt="404" width="600">
          </li>` 
    };  
    list.innerHTML = marcup;
};

export { createMarcup };