/**
 * Created by vik on 06.01.2015.
 */

var timeLineApp = function (options) {

    var app = {
        $wrapTimeLine: $('.' + options.wrapTimeLineClass),
        $timeLine: $('.' + options.timeLineClass),
        displacementTimeLine: 0,
        startYear: options.startYear,
        endYear: options.endYear,
        yearsOnPage: options.yearsOnPage,
        yearsLoaded: 0,
        directionClass: options.directionBtnClass,
        leftOnScreenYear: options.startYear,
        nextForLoad: options.startYear, // + options.yearsOnPage, - before init,
        yearsOnTimeLine: options.endYear - options.startYear + 1,
        jqueryUISlider: options.jqueryUISlider,
        $slider: $('.' + options.sliderClass),

        init: function () {
            app.$timeLine.width((app.endYear - app.startYear + 1) * 100 + '%');
            app.addHandlers();
            app.setScale(0, app.yearsOnPage);
            app.$sliderHandleWidth = app.$slider.find('.ui-slider-handle');
            return this;
        },
        addHandlers: function () {
            //left and right control buttons
            $('.' + app.directionClass).on('click', function () {
                var direction = $(this).data('direction');

                //impossible moving time line
                if (app.leftOnScreenYear === app.startYear && direction > 0) {
                    alert('It is the earliest date! ' + app.startYear);
                } else if (app.leftOnScreenYear - app.startYear < app.yearsOnPage && direction > 0) {
                    app.showYear(app.startYear);
                } else if (app.leftOnScreenYear + app.yearsOnPage - 1 === app.endYear && direction < 0) {
                    alert('It is the latest date! ' + app.endYear);
                } else if (app.leftOnScreenYear + 2 * app.yearsOnPage - 1 > app.endYear && direction < 0) {
                    app.showYear(app.endYear - app.yearsOnPage + 1);
                } else {
                    app.showYear(app.leftOnScreenYear - direction * app.yearsOnPage);
                }
            });
        },
        moveTimeLine: function (year) {
            app.$timeLine.removeClass('transition');
            app.displacementTimeLine = 100 / app.yearsOnPage * (app.startYear - year) / 100;
            app.$timeLine.css('left', app.displacementTimeLine * 100 + '%');
            setTimeout(function () {
                app.$timeLine.addClass('transition');
            }, 0);
        },
        sliderHandleWidth: function () {
            $('.ui-slider-handle').width(app.$slider.width() / app.yearsOnTimeLine * app.yearsOnPage);
        },
        showYear: function (year) {
            var needYearsLoad = (year + app.yearsOnPage - 1) - app.nextForLoad + 1;
            if (needYearsLoad > 0) {
                app.loadYears(needYearsLoad);
            }
            app.displacementTimeLine += (app.leftOnScreenYear - year) / app.yearsOnPage;
            app.$timeLine.css('left', (app.displacementTimeLine) * 100 + '%');
            app.leftOnScreenYear = year;

            //user interface part
            if (app.jqueryUISlider) {
                app.$slider.slider("value", year);
            }
        },
        setScale: function (oldYearsOnPage, newYearsOnPage) {
            if (newYearsOnPage === oldYearsOnPage) {
                return false;
            }
            app.yearsOnPage = newYearsOnPage;
            var needToYearsLoad = app.leftOnScreenYear + newYearsOnPage - app.nextForLoad;
            app.moveTimeLine(app.leftOnScreenYear);
            if (needToYearsLoad > 0) {
                app.loadYears(needToYearsLoad)
            }
            //sliderHandleWidth
            app.sliderHandleWidth();
            if (oldYearsOnPage !== 0 && app.$slider.slider('value') + app.yearsOnPage - 1 > app.endYear) {
                var newVal = app.endYear - app.yearsOnPage + 1;
                app.$slider.slider("value", newVal);
                app.showYear(newVal);
            }
            //styles
            var styleString = '<style type="text/css">';
            styleString +=
                '.year {width: ' + 100 / app.yearsOnTimeLine / newYearsOnPage + '%;} .year a {';
            if (app.yearsOnPage < 3) {
                styleString += 'float: left; width: 20%; margin: 100px 0 0;';
            } else if (app.yearsOnPage < 9) {
                styleString += 'width: 35%;';
            }
            styleString += '}</style>';
            $('.js-scale').html($(styleString));

        },
        loadYears: function (yearsQuantityLoad) {
            var $year, $item, url;
            var year = app.nextForLoad;
            if (year > app.endYear) {
                return false;
            }
            for (var i = 0; i < yearsQuantityLoad; i++) {
                $.ajax({
                    type: 'GET',
                    url: 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=car%20' + (year + i) + '&imgsz=xlarge&rsz=5',
                    dataType: 'jsonp',
                    success: function (data) {
                        $year = $('<div class="js-year year"></div>');
                        $(data.responseData.results).each(function (index) {
                            url = this.unescapedUrl;
                            $item = $('<a><img></a>');
                            $item.addClass('fancybox').attr('href', url).attr('data-fancybox-group', 'year-' + year);
                            $item.find('img').attr('src', url).attr('alt', year + '-' + index);
                            $year.addClass("year-" + year);
                            $year.append($item);
                            app.$timeLine.append($year);
                            $year.find('img').on('load', function (event) {
                                $(this).css({
                                    'transform': 'scale(1)',
                                    '-webkit-transform': 'scale(1)'
                                });
                            });
                        });
                        //console.log("load year - " + year);
                        year++;
                    },
                    error: function (error, txtStatus) {
                        console.log(txtStatus);
                        console.log('error');
                    }
                });
            }
            app.nextForLoad += yearsQuantityLoad;
            app.yearsLoaded += yearsQuantityLoad;
        },
        //getters an setters
        getYearsOnPage: function () {
            return app.yearsOnPage;
        }
    };

    app.init();

    return {
        showYear: app.showYear,
        //changeScale method changes number of years on single page
        changeScale: app.setScale,
        getYearsOnPage: app.getYearsOnPage,
        sliderHandleWidth: app.sliderHandleWidth
    };
};