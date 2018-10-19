$(document).ready(function(){
    initDatepicker();
})


function initDatepicker() {
    var now = new Date();
    var today = now.format('dd.mm.yyyy');
    jQuery('.datepicker').datepicker({
        dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Aвгуст", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        firstDay: 1,
        minDate: today,
        dateFormat: 'dd.mm.yy',
        prevText: '<',
        nextText: '>',
    });

    jQuery('.datepicker').val(today);
}