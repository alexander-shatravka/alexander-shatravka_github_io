var catalogParseCopy = window.catalog.slice();

for (var k = 0; k < catalogParseCopy.length; k++) {
    if (catalogParseCopy[k].discountedPrice !== catalogParseCopy[k].price){
        catalogParseCopy[k].category.push('sale');
    }
    if (catalogParseCopy[k].hasNew){
        catalogParseCopy[k].category.push('new');
    }
}

var htmlForCatalogPresentation = '';

var isNew='';
var discount = 0;
var oldPrice = '';
var currentPrice = '';
var placeholder = '';

function setItemsHTMLPresentation(displayCatalog) {
    
    for(var i = 0; i < 5; i++) {
        if(displayCatalog[i].category.some(function(value){return value === 'presentation'})) {    

        if (displayCatalog[i].discountedPrice < window.catalog.price) {
            discount = '- ' + Math.ceil((1 - (displayCatalog[i].discountedPrice / displayCatalog[i].price)) * 100) + '%';
            oldPrice = '' + (displayCatalog[i].price).toFixed(2);
        }
        else {
            discount = '';
            oldPrice = '';
        }

        if (displayCatalog[i].hasNew) {
            isNew = 'New'
        }
        else {
            isNew = ''      
        }

        if (displayCatalog[i].discountedPrice) {
            currentPrice = (displayCatalog[i].discountedPrice).toFixed(2) + ' грн';
        }
        else {
            currentPrice = ''
        }

        if (displayCatalog[i].placeholder) {
            placeholder = (displayCatalog[i].placeholder);
        }
        else {
            placeholder = ''
        }
        
        htmlForCatalogPresentation += 
            '<div id="'+ displayCatalog[i].id  +'" class="item">\n'+
                '<a href="item.html">\n' +
                    '<div class="item-img">\n'+'<img src='+ displayCatalog[i].thumbnail +' alt=""></div>\n' +
                    '<div class="descr-content">\n'+
                        '<h6 class="title">' + displayCatalog[i].title + '</h6>\n' +
                        '<span class="description">' + displayCatalog[i].description + '</span>\n' + 
                        '<div class="item-price"><span class="current-price">' + currentPrice + '</span>\n' +
                            '<span class="old-price">' + oldPrice + '</span>\n' +
                            '<span class="discount">' + discount + '</span>\n' +
                        '</div>\n' +
                        '<span class="new">' + isNew + '</span>\n' +
                        /*'<span class="placeholder">' + placeholder + '</span>\n' +*/
                        '<a href="" class="button btn-cart"><i class="fas fa-shopping-cart"></i></a>\n'+
                    '</div>\n'+
                '</a>\n' +
            '</div>'

            
        }
        document.querySelector('.catalog-presentation-wrapper').innerHTML = htmlForCatalogPresentation;
    }
}

setItemsHTMLPresentation(catalogParseCopy); 