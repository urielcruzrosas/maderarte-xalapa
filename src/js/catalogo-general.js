/*==================================================
                MADERARTE
         CATÁLOGO GENERAL
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================================
                VARIABLES
    ==============================================*/

    const productModal = document.getElementById("productModal");

    const modalImage = document.getElementById("modalImage");

    const modalTitle = document.getElementById("modalTitle");

    const modalPrice = document.getElementById("modalPrice");

    const modalMaterial = document.getElementById("modalMaterial");

    const modalSize = document.getElementById("modalSize");

    const modalDescription = document.getElementById("modalDescription");

    const buyButton = document.getElementById("buyButton");

    const quantityContainer = document.querySelector(".quantity-box");

    let quantity = 1;

    /*==============================================
            ABRIR MODAL
    ==============================================*/

    productModal.addEventListener("show.bs.modal", function(event){

        const card = event.relatedTarget;

        quantity = 1;

        updateQuantity();

        modalImage.src = card.dataset.image;

        modalImage.alt = card.dataset.name;

        modalTitle.textContent = card.dataset.name;

        modalPrice.textContent = card.dataset.price;

        modalMaterial.textContent = card.dataset.material;

        modalSize.textContent = card.dataset.size;

        modalDescription.textContent = card.dataset.description;

        updateWhatsapp(card.dataset.whatsapp);

    });

    /*==============================================
            BOTONES CANTIDAD
    ==============================================*/

    const minusButton = quantityContainer.querySelector("button:first-child");

    const plusButton = quantityContainer.querySelector("button:last-child");

    const quantityText = quantityContainer.querySelector("span");

    minusButton.addEventListener("click", () => {

        if(quantity > 1){

            quantity--;

            updateQuantity();

        }

    });

    plusButton.addEventListener("click", () => {

        quantity++;

        updateQuantity();

    });

    function updateQuantity(){

        quantityText.textContent = quantity;

    }

    /*==============================================
            WHATSAPP
    ==============================================*/

    function updateWhatsapp(product){

        const numero = "5212281821259";

        const mensaje =

`Hola, me interesa el siguiente producto:

🪵 Producto: ${product}

📦 Cantidad: ${quantity}

¿Podrían brindarme más información?`;

        buyButton.href =

`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    }

    /*==============================================
        ACTUALIZAR WHATSAPP
        SI CAMBIA LA CANTIDAD
    ==============================================*/

    plusButton.addEventListener("click", ()=>{

        updateWhatsapp(modalTitle.textContent);

    });

    minusButton.addEventListener("click", ()=>{

        updateWhatsapp(modalTitle.textContent);

    });

});