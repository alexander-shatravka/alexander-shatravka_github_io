var catalogCopy = window.catalog.slice();

for (var k = 0; k < catalogCopy.length; k++) {
    if (catalogCopy[k].discountedPrice !== catalogCopy[k].price){
        catalogCopy[k].category.push('sale');
    }
    if (catalogCopy[k].hasNew){
        catalogCopy[k].category.push('new');
    }
}

var ItemsHTML = "";
var isNew='';
var discount = 0;
var oldPrice = '';
var currentPrice = '';
var placeholder = '';
var hiddenContainer = document.querySelector('.hidden-container');

var cheapExpensive = catalogCopy.slice(); 
var expensiveCheap = catalogCopy.slice(); 
var popular = catalogCopy.slice();
var checkedFilters = [];    
var allFilters = Array.from($("input:checkbox"));



$("input:checkbox").on('change', function(){
    
    if(($(this).prop('checked'))){
        checkedFilters.push($(this).val());
    }
    else {
        checkedFilters.splice( checkedFilters.indexOf(($(this).val(), 1 )));
    }

    checkedFilters.sort(function(a, b){
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    })

    for (var i = 0; i < checkedFilters.length; i++){
        if(checkedFilters[i] === checkedFilters[i+1]){
            checkedFilters.splice( checkedFilters.indexOf(checkedFilters[i]), 1 );
        }
    }
    setItemsHTML(popular)
})



function setSortCatalog() {
    cheapExpensive.sort(function(a, b){
        return a.discountedPrice - b.discountedPrice;
    })
    expensiveCheap.sort(function(a, b){
        return b.discountedPrice - a.discountedPrice;
    }) 
    popular.sort(function(a, b){
       return a.popularity - b.popularity;
    }) 
}
setSortCatalog(); 


function setItemsHTML(displayCatalog) {
            ItemsHTML = '';
            window.arrOfItemsHTML = [];
            
    for (var i = 0; i < displayCatalog.length; i++) {
        
        if(displayCatalog[i].category.some(function(val){return val === checkedFilters[0]})) {
            
            if (displayCatalog[i].discountedPrice < displayCatalog.price) {
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
    
            ItemsHTML += 
                '<div id="'+ displayCatalog[i].id  +'" class="item lightbox">\n' +
                    '<div class = "item-content">\n'+ 
                        '<a href="item.html" class="open-item lightbox-opener">\n'+
                            '<div class="item-img">\n'+'<img src='+ displayCatalog[i].thumbnail +' alt=""></div>\n' +
                            '<h6 class="title">' + displayCatalog[i].title + '</h6>\n' +
                            //'<span class="view-item">Подробнее</span>\n'+
                        '</a>\n' +
                        '<span class="description">' + displayCatalog[i].description + '</span>\n' + 
                        '<div class="item-price"><span class="current-price">' + currentPrice + '</span>\n' +
                            '<span class="old-price">' + oldPrice + '</span>\n' +
                            '<span class="discount">' + discount + '</span>\n' +
                        '</div>\n' +
                        '<span class="new">' + isNew + '</span>\n' +
                        /*'<span class="placeholder">' + placeholder + '</span>\n' +*/
                        '<a href="" class="button btn-cart"><i class="fas fa-shopping-cart"></i></a>\n' +
                    '</div>\n'+
                '</div>'
        }
        document.querySelector('.items-container').innerHTML = ItemsHTML;
        var collectionOfItems = document.getElementsByClassName('item');
        var arrOfItems = Array.from(collectionOfItems);
        window.arrOfItemsHTML = Array.from(arrOfItems).map(function(i){return i.outerHTML});
        /*for(var k = 0; k < arrOfItems.length; k++){
            window.arrOfItemsHTML.push(arrOfItems[i].outerHTML)
        } */   
    }   
}

setItemsHTML(popular);

document.getElementById('sort-by').addEventListener('change', function (){
    setItemsHTML(expensiveCheap);
    switch(this.value){
        case "cheap-expensive":
            setItemsHTML(cheapExpensive);
            //initPagination();
            break;
        case "expensive-cheap":
            setItemsHTML(expensiveCheap);
            //initPagination();
            break;
        case "popular":
            setItemsHTML(popular);
            //initPagination();
            break;        
    }
})

