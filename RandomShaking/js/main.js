let arr = [{
    number: 1,
    prob: 0.01 //1%
}, {
    number: 2,
    prob: 0.04 //3% (0.04 - 0.01)
}, {
    number: 3,
    prob: 0.1 //6% (0.1 - 0.04)
}, {
    number: 4,
    prob: 0.19 //9% (0.19 - 0.1)
}, {
    number: 5,
    prob: 0.3 //11% (0.3 - 0.19)
}, {
    number: 6,
    prob: 0.43 //13% (0.43 - 0.3)
}, {
    number: 7,
    prob: 0.58 //15% (0.58 - 0.43)
}, {
    number: 8,
    prob: 0.76 //18% (0.76 - 0.58)
}, {
    number: 9,
    prob: 1 //24% (0.1 - 0.76)
}]; // order of elements is important

$('.shake-button').click(function(){
    this.classList.add('shaking');
    setTimeout(function () {
        $('.shake-button').removeClass('shaking');
    },530);

    let rand = Math.random();
    for (let i = 0; i < arr.length; i++) {
        if (rand < arr[i].prob) {
            $(".elements-container").children()[i].classList.add('choosed');
            setTimeout(function () {
                $(".elements-container").children()[i].classList.add('hide');
            },2000);
            break;
        }
    }
});