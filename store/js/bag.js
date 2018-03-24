
window.onload = function localContainer() {
    // FOR REFRESHING ITEMS IN BAG (BACK 4 CUSTOM ITEMS) DELETE NEXT LINE OF CODE AND REFRESH BAG PAGE, AFTER THAT INSERT CODE AGAIN;
    var itemsToBag = '';
    if(localStorage['item-to-bag']){
         itemsToBag = JSON.parse(localStorage['item-to-bag']);
    }

    var addItemsHTML = '';

    for(var counter = 0; counter < itemsToBag.length; counter++){
        addItemsHTML += '<div class="bag-item">\n' +
            '<a href="item.html" class="item-img"><img src=' + itemsToBag[counter].thumbnail + ' alt=""><p class="view">View item</p></a>\n' +
            '<div class="info-item">\n' +
            '<a href="#" class="title">'+ itemsToBag[counter].title +'</a>\n' +
            '<span class="cost">'+ itemsToBag[counter].cost +'</span>\n' +
            '<ul>\n' +
            '<li>Color: <span class="item-color">'+ itemsToBag[counter].color +'</span></li>\n' +
            '<li>Size: <span class="item-size">'+ itemsToBag[counter].size +'</span></li>\n' +
            '<li>Quantity: <span class="minus-item">-</span><span class="quantity">1</span><span class="plus-item">+</span></li>\n' +
            '</ul>\n' +
            '<span class="remove">Remove item</span>\n' +
            '</div>\n' +
            '</div>'
    }
    var bagContainer = document.querySelector(".bag-container");

    bagContainer.innerHTML += addItemsHTML;

    /*if (localStorage['container'] !== undefined) {
        bagContainer.innerHTML = localStorage['container'];    <--FOR PERSISTENT STORAGE
    }*/

    var costHeader = document.querySelector(".cost-header");
    var minus = document.querySelectorAll('.minus-item');
    var plus = document.querySelectorAll('.plus-item');
    var emptyButton = document.querySelector(".empty");
    var remove = document.querySelectorAll(".remove");
    var message = document.querySelector(".empty-bag-message");
    var buyNow = document.querySelector(".buy-now");
    var successMessage = document.querySelector(".success-message");

    function calculateTotalAmount() {
        var totalCost = document.querySelector(".cost-tot");
        var itemCost = document.querySelectorAll('span.cost');
        var quantityHeader = document.querySelector('.quantityHeader');
        var quantityItems = document.querySelectorAll('.quantity');

        var total = 0;
        itemCost.forEach(function (value) {
            total += Number(value.innerText.substring(1, 100));
        });
        var totalItems = 0;
        for (var j = 0; j < quantityItems.length - 1; j++) {
            totalItems += Number(quantityItems[j].innerText);
        }
        total = total.toFixed(2);
        totalCost.innerText = "£" + total;
        costHeader.innerText = "£" + total + " ";
        quantityHeader.innerText = '(' + totalItems + ')';
        localStorage["totalAmount"] = "£" + total + " ";
        localStorage["totalAmountItems"] = "(" + totalItems + ")";
    }

    calculateTotalAmount();


    for (var k = 0; k < remove.length; k++) {
        remove[k].onclick = function () {
            this.parentNode.parentNode.remove();
            if (this.parentNode.parentNode.remove())
            calculateTotalAmount();
            emptyBagMessage();
        }
    };

    emptyButton.onclick = function () {
        while (bagContainer.firstChild) {
            bagContainer.removeChild(bagContainer.firstChild);
        }
        emptyBagMessage();
        calculateTotalAmount();

    };

    function emptyBagMessage() {
        if (bagContainer.children.length === 0) {
            message.style.display = "block";
        }
        if (successMessage.style.display === "block") {
            message.style.display = "none"
        }
    };

    function FullEmptyBagMessage() {
        if (bagContainer.childNodes.length === 0) {
            message.style.display = "block";
        }
        if (successMessage.style.display === "block") {
            message.style.display = "none"
        }
    }
    FullEmptyBagMessage()


    buyNow.onclick = function buy() {
        while (bagContainer.firstChild) {
            bagContainer.removeChild(bagContainer.firstChild);
        }
        successMessage.style.display = 'block';
        if (message.style.display === "block") {
            successMessage.style.display = 'none';
        }
    };

    for (var i = 0; i < minus.length; i++) {
        minus[i].onclick = function () {
            var itemCost = this.parentNode.parentNode.previousElementSibling.innerText.substring(1, 100);
            var quantity = this.nextElementSibling.innerText * 1;
            if (quantity > 1) {
                itemCost -= itemCost / (quantity);
                quantity--;
                itemCost = itemCost.toFixed(2)
            }
            this.nextElementSibling.innerText = quantity;
            this.parentNode.parentNode.previousElementSibling.innerText = "£" + itemCost;

            calculateTotalAmount()
        }
    }

    for (var j = 0; j < plus.length; j++) {
        plus[j].onclick = function () {
            var itemCost = Number(this.parentNode.parentNode.previousElementSibling.innerText.substring(1, 100));
            var quantity = this.previousElementSibling.innerText * 1;
            itemCost += itemCost / (quantity);
            quantity++;
            itemCost = itemCost.toFixed(2);
            this.previousElementSibling.innerText = quantity;
            this.parentNode.parentNode.previousElementSibling.innerText = "£" + itemCost;

            calculateTotalAmount()

        }
    }


};

window.onunload = function bagStorage() {
    localStorage['container'] = document.querySelector('.bag-container').innerHTML;
};
