const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product');

for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', (e) => {

        for (let j = 0; j < btns.length; j++){
            btns[j].classList.remove('active');
        }

        e.target.classList.add('active');
        
        const filter = e.target.dataset.filter;
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};


const search = document.getElementById("search");
const productName = document.querySelectorAll(".card-title")

search.addEventListener("keyup", searchProducts);


function searchProducts(e) {
    let input = e.target.value.toLowerCase();
    
    productName.forEach((product) => {
        let titile = product.textContent;
        if(titile.toLowerCase().indexOf(input) != -1){
            product.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "block"
        }else {
            product.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none"
        }
    })
}