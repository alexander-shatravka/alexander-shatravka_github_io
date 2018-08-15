$(document).ready(function(){

initSlick();
initParallax();
initSlider();
initShowMenu();
//initShowMobileMenu();
initPreloader();
//initItemOpener();

function initPreloader() {
	$(window).load(function() {
		setTimeout(function() {
			$('#preloader').fadeOut('slow', function() {});
		}, 2000);
	});
} 

function initShowMobileMenu() {
	$('#menu-opener').on('click', function(){
		$('#wrapper').toggleClass('mobile')
	})
}

function initSlick(){
	$('.slick-slider').slick({
		autoplay: false,
		autoplaySpeed: 10000,
		speed: 1000,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		dots: true,
		arrows: true,
		pauseOnFocus: false,	
		pauseOnHover: false,
		pauseOnClick: false,
		prevArrow: $('.slick-prev'),
		nextArrow: $('.slick-next'),
	});


	//scroll slide with wheel
	window.addEventListener('wheel', function(e) {
		if (e.deltaY < -100) {
			$('.slick-slider').slick('slickPrev');
		}
		if (e.deltaY > 100) {
			$('.slick-slider').slick('slickNext');
		}
	  });
}

function initParallax() {
	var scene = document.getElementById('background-parallax');
	var parallaxInstance = new Parallax(scene, {
		relativeInput: true,
	});
}

function initSlider() {
	var creditConfig = {percent: 0.001, percentNormal: 0.015};

	function formatMoney(value) {
		var parts = String(value).split('.');
		return parts.length > 1 ? (parts[0] + ',<sub>' + parts[1] + '</sub>') : parts[0];
	}

	var $count1 = jQuery(".slider.amount").data("default"),
		$count2 = jQuery(".slider.period").data("default"),
        $count3 = jQuery(".thisCreditAmount").html();
		if(typeof jQuery(".thisCreditAmount").html() !== 'undefined')
		{
            $count3 = jQuery(".thisCreditAmount").html().replace(',', '.');
		}
	var	$count4 = jQuery(".slider.period2").data("default"),
		countPercent = jQuery(".percent"),
		percent = creditConfig.percent,
		slider = jQuery(".slider");

    function selectProduct(sliderCurrent) {
    	var form = sliderCurrent.closest('form'),
			product = form.find('.product-name'),
			sliders = [form.find('.amount'), form.find('.period')];

        percent = creditConfig.percent;
        product.val(product.data('discount-value'));

    	for (var i=0; i<sliders.length; i++) {
            var sliderValues = sliders[i].attr('data-values'),
				currentValue = sliders[i].data('onSlideValue') || sliders[i].slider("value"),
                maxValue = sliderValues ? sliderValues[sliderValues.length-1] : sliders[i].data("max"),
                maxWithDiscountValue = sliders[i].data("max-wiht-discount") || maxValue;

			if (currentValue > maxWithDiscountValue) {
				percent = creditConfig.percentNormal;
                product.val(product.data('normal-value'));
				break;
			}
		}
    }

    slider.each(function() {
		var sliderCurrent = jQuery(this),
			sliderValues = sliderCurrent.attr('data-values'),
			defaultValue = Math.ceil(sliderCurrent.data("default")),
			step = sliderCurrent.data("step"),
        	min = sliderCurrent.data("min"),
			max = sliderCurrent.data("max");
			
			$('.min-amount').html(min +' грн');
			$('.max-amount').html(max +' грн');

		if (sliderValues) {
			sliderValues = JSON.parse(sliderValues);
		}

        if((defaultValue + step) > max) {
            sliderCurrent.next(".plus-slider").addClass("disabled");
        }else {
            sliderCurrent.next(".plus-slider").removeClass("disabled");
        }

		sliderCurrent.slider({
			range: "min",
			value: defaultValue,
			min: min,
			max: max,
			step: step,
			slide: function(event, ui) {
				var currentValue = sliderValues ? sliderValues[ui.value-1] : ui.value,
					maxValue = sliderValues ? sliderValues[sliderValues.length-1] : sliderCurrent.data("max");

				sliderCurrent.data('onSlideValue', currentValue);
                selectProduct(sliderCurrent);
                sliderCurrent.data('onSlideValue', false);

                count.html(formatMoney(currentValue));
				if(sliderCurrent.hasClass("amount")) {
					$count1 = count.html();
				}
				else if(sliderCurrent.hasClass("period")) {
					$count2 = count.html();
					var datepick = sliderCurrent.closest(".row").find(".datepicker");
					datepick.datepicker("option", "defaultDate", +(Number($count2)));
					datepick.val($count2);
				}
				else if(sliderCurrent.hasClass("period2")) {
					$count4 = count.html();
					var datepick = sliderCurrent.closest(".row").find(".datepicker");
					datepick.datepicker("option", "defaultDate", +(Number($count4)));
					datepick.val($count4);
				}
				initPercent();
				if(currentValue >= maxValue) {
					sliderCurrent.next(".plus-slider").addClass("disabled");
				}else {
					sliderCurrent.next(".plus-slider").removeClass("disabled");
				}
			}
		});
		if(sliderCurrent.hasClass("amount")) {
			jQuery("<span class='clicable-area'></span><span class='count-wrap'><span class='count-frame'><b class='count'>0</b><span class='currency'> ÃÂ³Ã‘â‚¬ÃÂ¸ÃÂ²ÃÂµÃÂ½</span></span></span>").appendTo(sliderCurrent.children("span.ui-slider-handle"));
		}
		else if(sliderCurrent.hasClass("period") || sliderCurrent.hasClass("period2")) {
			jQuery("<span class='clicable-area'></span><span class='count-wrap'><span class='count-frame'><b class='count'>0</b><span class='currency'> ÃÂ´ÃÂ½ÃÂµÃÂ¹</span></span></span>").appendTo(sliderCurrent.children("span.ui-slider-handle"));
		}
		else if(sliderCurrent.hasClass("bonuses")) {
			jQuery("<span class='clicable-area'></span><span class='count-wrap'><span class='count-frame'><b class='count'>0</b><span class='currency'> ÃÂ±ÃÂ¾ÃÂ½Ã‘Æ’Ã‘ÂÃÂ¾ÃÂ²</span></span></span>").appendTo(sliderCurrent.children("span.ui-slider-handle"));
		}
		else{
			jQuery("<span class='clicable-area'></span><span class='count-wrap'><span class='count-frame'><b class='count'>0</b><span class='currency'> ÃÂ³Ã‘â‚¬ÃÂ¸ÃÂ²ÃÂµÃÂ½</span></span></span>").appendTo(sliderCurrent.children("span.ui-slider-handle"));
		}
		var count = sliderCurrent.find(".count");
		count.html(sliderCurrent.data("default"));
		if(sliderCurrent.hasClass("period")) {
			var datepick = sliderCurrent.closest(".row").find(".datepicker");
			datepick.datepicker("option", "defaultDate", +(Number($count2)));
			datepick.val($count2);
		}
	});
	var countMinus = jQuery(".minus-slider");
	var countPlus = jQuery(".plus-slider");
	countMinus.click(function() {
		var thisButton = jQuery(this);
		var thisSlider = thisButton.next(".slider");
		var count = thisSlider.find(".count");
		if(thisSlider.slider("value") > thisSlider.data("min")) {
			var sliderCurrentValue = thisSlider.slider("option", "value");
			thisSlider.slider({value: sliderCurrentValue - Number(thisSlider.data("step"))});
			count.html(thisSlider.slider("value"));
			if(thisSlider.hasClass("amount")) {
				$count1 = count.html();
			}
			else if(thisSlider.hasClass("period")) {
				$count2 = count.html();
				var datepick = thisSlider.closest(".row").find(".datepicker");
				datepick.datepicker("option", "defaultDate", +(Number($count2)));
				datepick.val($count2);
			}
			else if(thisSlider.hasClass("period2")) {
				$count4 = count.html();
				var datepick = thisSlider.closest(".row").find(".datepicker");
				datepick.datepicker("option", "defaultDate", +(Number($count4)));
				datepick.val($count4);
			}
            selectProduct(thisSlider);
			initPercent();
			if(count.html() == thisSlider.data("max")) {
				thisSlider.next(".plus-slider").addClass("disabled");
			}else {
				thisSlider.next(".plus-slider").removeClass("disabled");
			}
		}
	});
	jQuery(".datepicker").on("change", function() {
		var datepick = jQuery(this);
		var thisSlider = datepick.closest(".row").find(".slider");
		var count = thisSlider.find(".count");
		var sliderCurrentValue = thisSlider.slider("option", "value");
		thisSlider.slider({value: Number(datepick.val())});
		count.html(thisSlider.slider("value"));
		if(thisSlider.hasClass("period2")) {
			$count4 = count.html();
		}else {
			$count2 = count.html();
		}
		if(count.html() == thisSlider.data("max")) {
			thisSlider.next(".plus-slider").addClass("disabled");
		}else {
			thisSlider.next(".plus-slider").removeClass("disabled");
		}
		selectProduct(thisSlider);
		initPercent();
	});
	jQuery(countPlus).click(function() {
		var thisButton = jQuery(this);
		var thisSlider = thisButton.prev(".slider");
		var count = thisSlider.find(".count");
		var sliderValues = thisSlider.attr('data-values');
		var step = Number(thisSlider.data("step"));

		if (sliderValues) {
			sliderValues = JSON.parse(sliderValues);
		}

		var calculatedValue = sliderValues ? sliderValues[thisSlider.slider("value")-1] : thisSlider.slider("value"),
			calculatedMaxValue = sliderValues ? sliderValues[sliderValues.length-1] : thisSlider.data("max");

		if((calculatedValue + step) <= calculatedMaxValue) {
			thisButton.removeClass("disabled");
			var sliderCurrentValue = thisSlider.slider("option", "value"),
				newValue = Math.round(sliderCurrentValue) + step;
			thisSlider.slider({value: newValue});
			calculatedValue = sliderValues ? sliderValues[newValue-1] : newValue;
				
			count.html(formatMoney(calculatedValue));
			if(thisSlider.hasClass("amount")) {
				$count1 = count.html();
			}
			else if(thisSlider.hasClass("period")) {
				$count2 = count.html();
				var datepick = thisSlider.closest(".row").find(".datepicker");
				datepick.datepicker("option", "defaultDate", +(Number($count2)));
				datepick.val($count2);
			}
			else if(thisSlider.hasClass("period2")) {
				$count4 = count.html();
				var datepick = thisSlider.closest(".row").find(".datepicker");
				datepick.datepicker("option", "defaultDate", +(Number($count4)));
				datepick.val($count4);
			}
			selectProduct(thisSlider);
			initPercent();

            if(calculatedValue < calculatedMaxValue) {
                thisButton.removeClass("disabled");
            }else{
                thisButton.addClass("disabled");
            }
		}
		else if(calculatedValue < calculatedMaxValue && calculatedValue == sliderValues[sliderValues.length-2]){
            thisButton.removeClass("disabled");
            var newValue = calculatedMaxValue;
            thisSlider.slider({value: Math.ceil(newValue)});
            calculatedValue = sliderValues ? sliderValues[sliderValues.length-1] : newValue;

            count.html(formatMoney(calculatedValue));
            if(thisSlider.hasClass("amount")) {
                $count1 = count.html();
            }
            else if(thisSlider.hasClass("period")) {
                $count2 = count.html();
                var datepick = thisSlider.closest(".row").find(".datepicker");
                datepick.datepicker("option", "defaultDate", +(Number($count2)));
                datepick.val($count2);
            }
            else if(thisSlider.hasClass("period2")) {
                $count4 = count.html();
                var datepick = thisSlider.closest(".row").find(".datepicker");
                datepick.datepicker("option", "defaultDate", +(Number($count4)));
                datepick.val($count4);
            }
            selectProduct(thisSlider);
            initPercent();

            if(calculatedValue < calculatedMaxValue) {
                thisButton.removeClass("disabled");
            }else{
                thisButton.addClass("disabled");
            }
        }
	});
	function initPercent() {
		countPercent.text(parseFloat((percent * 100).toPrecision(15)));
		Date.prototype.addDays = function(days) {
		    this.setDate(this.getDate() + parseInt(days));
		    return this;
		};
		var currentDate = new Date();
		currentDate.addDays($count2);
		var day = currentDate.getDate().toString(),
			month = (1 + currentDate.getMonth()).toString(),
			dateNow = (day.length > 1 ? day : '0' + day) + '.' + (month.length > 1 ? month : '0' + month) + '.' + currentDate.getFullYear().toString().substr(-2);
		jQuery('.online-credit .expired-date').text(dateNow);
		var payTotal = Number($count1) + Number($count2) * (Number($count1) * percent);
		if(jQuery("form").hasClass("extension-credit")){
			var currentDateExtension = new Date();
			currentDateExtension.addDays($count4);
			var dayExtension = currentDateExtension.getDate().toString(),
				monthExtension = (1 + currentDateExtension.getMonth()).toString(),
				dateNowExtension = (dayExtension.length > 1 ? dayExtension : '0' + dayExtension) + '.' + (monthExtension.length > 1 ? monthExtension : '0' + monthExtension) + '.' + currentDateExtension.getFullYear().toString().substr(-2);
			jQuery('.extension-credit .expired-date').text(dateNowExtension);
			var payTotalExtension = Number($count3) + Number($count4) * (Number($count3) * percent);
			jQuery('.extension-credit .total-value').html(formatMoney(payTotalExtension.toFixed(2)));
		}
		jQuery('.online-credit .total-value').html(formatMoney(payTotal.toFixed(2)));
	}
	initPercent();
}

function updateSliderValues() {
	jQuery('[data-input]').each(function(){
		var slider = jQuery(this),
			input = jQuery(slider.attr('data-input')),
			values = slider.attr('data-values');

		if (values) {
			values = JSON.parse(values);
		}
		
        input.val(values ? values[slider.slider('value')-1] : slider.slider('value'));

		slider.on('slidechange', function(event, ui){
			input.val(values ? values[ui.value-1] : ui.value);
		});
		
		slider.on('slidecreate', function(event, ui){
			input.val(values ? values[ui.value-1] : ui.value);
		});
	});
}

function initShowMenu() {
	$('.dots-open-menu').click(function(){
		$('.hiding-menu').toggleClass('show-menu');
	})
}

})







