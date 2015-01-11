/**
 * Created by vik on 06.01.2015.
 */

$(document).ready(function () {

    /**
     * App settings
     */

    //call timeLine
    var startYear = 1960, endYear = 2015;
    var timeLine = timeLineApp({
        wrapTimeLineClass: 'js-wrap-timeLine',
        timeLineClass: 'js-timeLine',
        startYear: startYear,
        endYear: endYear,
        yearsOnPage: 1,
        directionBtnClass: 'js-direction',
        jqueryUISlider: true,
        sliderClass: 'js-slider'
    });

    //set slider
    var labels = new Array(endYear - startYear + 1).join('.').split('.');
    labels.forEach(function (label, index) {
        var year = startYear + index;
        labels[index] = '\'' + year.toString().slice(-2);
    });
    console.log(labels);
    var $slider = $('.js-slider');
    $slider.slider({
        min: startYear,
        max: endYear,
        step: 1
    }).on('slide', function (event, ui) {
        if (ui.value + timeLine.getYearsOnPage() - 1 > endYear) {
            var newVal = endYear - timeLine.getYearsOnPage() + 1;
            $(this).slider("value", newVal);
            timeLine.showYear(newVal);
            return false;
        }
        else {
            timeLine.showYear(ui.value);
        }
    }).slider('pips', {
        rest: 'label',
        labels: labels
    });

    /**
     * User interface functionality
     */

    var $years = $('.js-years');
    var yearsVal = $years.find('.js-val');

    $(window).on('resize', timeLine.sliderHandleWidth);
    $years.next().find('a').on('click', function (e) {
        $years.find('.js-val').text($(this).text());
        var newScale = $(this).data('scale');

        timeLine.changeScale(yearsVal.data('scale'), newScale);
        yearsVal.data('scale', newScale);
        e.preventDefault();
    });
    $('.js-change-scale').on('click', function () {
        var $currentScale = $years.find('.js-val');
        var diffScale = $(this).data('change-scale'),
            oldScale = $currentScale.data('scale'),
            newScale = oldScale + diffScale;
        if (newScale <= 0) {
            alert('Impossible scale!');
            return false;
        } else if (newScale > 10) {
            alert('Maximum scale!');
            return false;
        }

        $currentScale.text(newScale + ' years');
        $currentScale.data('scale', newScale);
        timeLine.changeScale(oldScale, newScale);
    });
    $('.ui-slider-pip').on('mousedown', function (e) {
        if ($(this).find('.ui-slider-label').data('value') + timeLine.getYearsOnPage() - 1 > endYear) {
            setTimeout(function () {
                $slider.slider('value', endYear - timeLine.getYearsOnPage() + 1);
            }, 100)
        }
    });

});
