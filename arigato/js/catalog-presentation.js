var htmlForCatalogPresentation = '';

function setItemsHTMLPresentation(displayCatalog) {
    
    for(var i = 0; i < 5; i++) {
        if(displayCatalog[i].category.some(function(val){return val === 'presentation'})) {    

        if (displayCatalog.discountedPrice < window.catalog.price) {
            discount = '- ' + Math.ceil((1 - (displayCatalog.discountedPrice / displayCatalog.price)) * 100) + '%';
            oldPrice = '' + (displayCatalog.price).toFixed(2);
        }
        else {
            discount = '';
            oldPrice = '';
        }

        if (displayCatalog.hasNew) {
            isNew = 'New'
        }
        else {
            isNew = ''      
        }

        if (displayCatalog.discountedPrice) {
            currentPrice = (displayCatalog.discountedPrice).toFixed(2) + ' грн';
        }
        else {
            currentPrice = ''
        }

        if (displayCatalog.placeholder) {
            placeholder = (displayCatalog.placeholder);
        }
        else {
            placeholder = ''
        }
        
        htmlForCatalogPresentation += 
            '<div id="'+ displayCatalog.id  +'" class="item lightbox">\n' +
                '<div class = "item-content">\n'+ 
                    '<a href="#'+ displayCatalog.id  +'" data-fancybox="'+ displayCatalog.id  +'" class="open-item lightbox-opener">\n'+
                        '<div class="item-img">\n'+'<img src='+ displayCatalog.thumbnail +' alt=""></div>\n' +
                        '<h6 class="title">' + displayCatalog.title + '</h6>\n' +
                        //'<span class="view-item">Подробнее</span>\n'+
                    '</a>\n' +
                    '<span class="description">' + displayCatalog.description + '</span>\n' + 
                    '<div class="item-price"><span class="current-price">' + currentPrice + '</span>\n' +
                        '<span class="old-price">' + oldPrice + '</span>\n' +
                        '<span class="discount">' + discount + '</span>\n' +
                    '</div>\n' +
                    '<span class="new">' + isNew + '</span>\n' +
                    /*'<span class="placeholder">' + placeholder + '</span>\n' +*/
                    '<a href="" class="button btn-cart"><i class="fas fa-shopping-cart"></i></a>\n' +
                '</div>\n'+
            '</div>';
        }
        document.querySelector('.catalog-presentation-wrapper').innerHTML = htmlForCatalogPresentation;
    }
}

setItemsHTMLPresentation(window.catalog); 