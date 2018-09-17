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
var allFilters = Array.from($(".filter-top a"));


function pushActiveCategories(){
    if(checkedFilters.length == 0) {
        if($('#all').hasClass('active')){
            for(var i = 0; i < allFilters.length; i++){
                checkedFilters.push(allFilters[i].text.toLowerCase());
            }
        }
    }
} 
pushActiveCategories();

$(".filter-top").on('click','a', function(e){
    if(e.target.id != 'all'){
        $('#all').removeClass('active');
    }
    if(checkedFilters.length === allFilters.length){
        checkedFilters.length = 0;
    }
    if(($(this).hasClass('active'))){
        checkedFilters.push($(this).text().toLowerCase());
    }
    else {
        checkedFilters.splice(checkedFilters.indexOf(($(this).text(), 1 )));
    }

    checkedFilters.sort(function(a, b){
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    })

    /*for (var i = 0; i < checkedFilters.length; i++){
        if(checkedFilters[i] === checkedFilters[i+1]){
            checkedFilters.splice( checkedFilters.indexOf(checkedFilters[i]), 1 );
        }
    }*/
    setItemsHTML(popular);
})

$("#all").on('click', function(){
    $('.category li a').each(function(){
        $(this).removeClass('active')
    });
    pushActiveCategories();
})


function setSortCatalog() {
    popular.sort(function(a, b){
        return a.popularity - b.popularity;
    }) 
    cheapExpensive.sort(function(a, b){
        return a.discountedPrice - b.discountedPrice;
    })
    expensiveCheap.sort(function(a, b){
        return b.discountedPrice - a.discountedPrice;
    }) 
}
setSortCatalog(); 


function setItemsHTML(displayCatalog) {
            ItemsHTML = '';
            window.arrOfItemsHTML = [];
            
    for (var i = 0; i < displayCatalog.length; i++) {
        
        if(displayCatalog[i].category.some(function(val){if (checkedFilters.includes(val)){return true}})) {
            
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
                currentPrice = (displayCatalog[i].discountedPrice).toFixed(2);
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
            '<div id="'+ displayCatalog[i].id  +'" class="item">\n'+
                '<a href="item.html">\n' +
                    '<div class="item-img">\n'+'<img src='+ displayCatalog[i].thumbnail +' alt=""></div>\n' +
                    '<div class="descr-content">\n'+
                        '<h6 class="title">' + displayCatalog[i].title + '</h6>\n' +
                        '<span class="description">' + displayCatalog[i].description + '</span>\n' + 
                        '<div class="item-price"><span class="current-price">' + currentPrice + '<span class="grn">грн.</span></span>\n' +
                            '<span class="old-price">' + oldPrice + '</span>\n' +
                            '<span class="discount">' + discount + '</span>\n' +
                        '</div>\n' +
                        '<span class="new">' + isNew + '</span>\n' +
                        /*'<span class="placeholder">' + placeholder + '</span>\n' +*/
                        '<a href="" class="button btn-cart"><i class="fi flaticon-shopping-cart"></i>   </a>\n'+
                    '</div>\n'+
                '</a>\n' +
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

$('#sort-by').on('click','a', function (){
    setItemsHTML(expensiveCheap);
    switch($(this).text().toLocaleLowerCase()){
        case "дешевле":
            setItemsHTML(cheapExpensive);
            //initPagination();
            break;
        case "дороже":
            setItemsHTML(expensiveCheap);
            //initPagination();
            break;
        case "популярные":
            setItemsHTML(popular);
            //initPagination();
            break;        
    }
})

