(function() {
    'use strict';

    var display_products, // products
        selected_bms = [], // bms
        indicators,
        options = {};

    var updateOutput = function(e)
    {
        var list   = e.length ? e : $(e.target),
            output = list.data('output');
        if (window.JSON) {
            display_products = window.JSON.stringify(list.nestable('serialize'));
            // update options.visibility
            options_control(options, 'visibility', display_products);
        } else {
            output.val('JSON browser support required for this application.');
        }
    };

    // starting product visibility
    updateOutput($('#nestable'));

        var test_indicators = {  // test obj indicators
            sq: 's908070605040',
            wpp: 'w10304050607020',
            wva: 'v506070809010',
            //dsq: 'd203040506070',
        };

        var bms_test = {
            sq: 'S102030405060708090992550',
            wpp: 'W1580359515801065759910754099',
            wva: 'V359935992599409925994099',
            dsq: 'D102030405060708090992550'
        }

    // `options` variable control
    function options_control(target, property_name, source){
        var assign = Object.defineProperty(target, property_name, {
            get: function() {
                return source;
            },
            set: function(newValue) {
                source = newValue;
            },
            enumerable: true,
            configurable: true,
        });
        console.log(target);
        return assign;
    }

    // test
    options_control(options, 'indicators', indicators);
    options_control(options, 'benchmarks', selected_bms);






    // product list markup generation
    function generate_product_selector(products){

        var html = '<div class="dd" id="nestable">' +
                    '<ol class="dd-list">';
        var i = 0;

        $.each(products, function(index, val){

            html += '<li class="dd-item" data-id="'+ i +'" data-product="'+ index +'"  data-product-visibility="true">' +
                        '<div class="dd-handle dd-handle-btn"></div>' +
                        //'<span class="badge pull-right" style="background-color: '+ val.color +';">'+ index +'</span>' +
                        '<div class="pull-right"><img src="'+ val.image +'"></div>' +
                        '<div class="dd-content bord-all dd-outline dd-anim">'+

                        '<div class="media-left">' +
                            '<a href="#" class="product_visibility" data-visibility="'+ index +'">' +
                                '<i class="fa fa-eye"></i>' +
                            '</a>' +
                        '</div>' +
                        '<div class="media-body">' +
                            '<p class="text-semibold m0">'+ val.name +'</p>' +
                        '</div>' +

                        '</div>' +
                    '</li>';
            i++;
        })
        html += '</ol>' +
                '</div>';

        $('#product_list').html(html)
                //return html;
    }

/////



    // list products
    generate_product_selector(products);

    // add nestable feature
    $('#nestable').nestable({
        group: 1,
        maxDepth: 1
    }).on('change', updateOutput);
    updateOutput($('#nestable'));

    $('#product_list').on('click', '.product_visibility', function(e){
        e.preventDefault();

        var icon = $(this).find('i.fa');
        if($(icon).hasClass('fa-eye')){

            $(icon).removeClass('fa-eye').addClass('fa-eye-slash');
            $(this).parent().parent().find('.media-body').addClass('text-muted');
            //$(this).data('product-visibility', false);
            $(this).closest('.dd-item').data('product-visibility', false);
            updateOutput($('#nestable'));
        }else{
            $(icon).removeClass('fa-eye-slash').addClass('fa-eye');
            $(this).parent().parent().find('.media-body').removeClass('text-muted');
            $(this).closest('.dd-item').data('product-visibility', true);
            updateOutput($('#nestable'));
        }
    });

    // generate BMs HTML
    function generate_bms_html(response){
        var html = '';

        $.each(response, function(i, v){
            var bms = v.Codes,
                labels = '';
            // labels
            $.each(bms, function(index, value){
                if(value.length > 0){
                    labels += '<span class="label" style="background-color:'+ products[index].color +';">'+ products[index].id + '</span>';
                }
            });
            html += '<a class="list-group-item  list-item-sm">'+
                        '<input name="presets" data-bm-id="'+ v.BenchmarkId +'" data-id="'+ i +'" id="bm_list_'+ i +'" class="toggle-switch bm_listing" type="checkbox">' +
                        '<label for="bm_list_'+ i +'"></label>' +
                        ' ' + v.Name +
                        '<div class="pull-right">' +
                            labels +
                        '</div>' +
                    '</a>';
        });

        return html;
    }

    // remove object from an array
    var removeByAttr = function(arr, attr, value){
        var i = arr.length;
        while(i--){
           if( arr[i]
               && arr[i].hasOwnProperty(attr)
               && (arguments.length > 2 && arr[i][attr] === value ) ){

               arr.splice(i,1);

           }
        }
        return arr;
    }


    // disable form btn
    $('.use_lib').prop('disabled', true);

    // fill `selected_bms` with lib values or remove them if deselected
    $('#presets_form').on('change', function(evt) {


        $('.use_lib').prop('disabled', false);
        var checked_item = $(evt.target),
            checked_id = evt.target.id,
            id = checked_item.data('id'),
            bm_id = checked_item.data('bm-id');




        if(checked_item.prop('checked')==true){
            selected_bms.push(bms[id]);
            checked_item.closest('.list-group-item').addClass('active');
            //$('#sq_seq_preview').append('<div id="' + checked_id +  checked_id  + '" class="sq_checked_lib">' + title + '<a href="#" id="' +  checked_id + '-' + checked_id + '" class="remove_checked_lib close" aria-label="Close"><span aria-hidden="true">&times;</span></a></div>');
        }else{
            /*$('#' + checked_id + checked_id).remove();
            */
            //delete selected_bms(bms[bm_id]);
            checked_item.closest('.list-group-item').removeClass('active');
            removeByAttr(selected_bms, 'BenchmarkId', bm_id);
        }

        // update `options.benchmarks`
         options_control(options, 'benchmarks', selected_bms);

        // prevent more than 4 comparison checked libs
        if($('input[name="presets"]:checked').length >= 4){
            $('input[name="presets"]').not(':checked').prop('disabled', true);
        }else{
            $('input[name="presets"]').prop('disabled', false);
        }

        // disable lib button
        if($('input[name="presets"]:checked').length == 0){
            $('.use_lib').prop('disabled', true);
        }
    });

    $('#presets_form').on('submit', function(e){
        e.preventDefault();
        var btn = $('#calculate').button('loading')


         generate_dimension(products, indicators, selected_bms);
         setTimeout(function(){
            btn.button('reset');
             $('#demo-set-body').collapse('hide');
         }, 3000);
    })



    // Sliders defaults
    var six_dim_sliders = {
            'min': [0],
            '25': [25],
            '50': [50],
            '75': [75],
            'max': [100]
        },
        seven_dim_sliders = {
            'min': [0],
            '20': [20],
            '40': [40],
            '60': [60],
            '80': [80],
            'max': [100]
        };


    // ----------- FUNCTIONS --------------- //

    // generate unique CSS id (DEPRECATED!)
    function uniqueId() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
    }

    // object sorting
    function sortObject(obj) {
        return Object.keys(obj).sort().reduce(function (result, key) {
            result[key] = obj[key];

            return result;
        }, {});
    }

    // array-object sorting
    function compare(a,b) {
      if (a.indicator < b.indicator)
        return 1;
      if (a.indicator > b.indicator)
        return -1;
      return 0;
    }
    // 4 BMs, 4 hashes
    //var hashes = [uniqueId(), uniqueId(), uniqueId(), uniqueId()]



    // prepare param (convert to array)
    function indicator_string_convert(param){
        if(param.length > 0){
            var sub = param.substring(1),
                group = sub.match(/.{1,2}/g);

                return group;
        }else{
            // no URL string param
            return false;
        }
    }

    // convert BM string to appropriate array
    function bm_string_convert(sequence){
        var sub = sequence.substring(1),
            group_1 = sub.match(/.{1,4}/g),
            seq_array = [];

        group_1.forEach(function(el){
            var el_2 = el.match(/.{1,2}/g);
            seq_array.push([el_2[0], el_2[1]]);
        });

        return seq_array;
    }

    // Product bar
    function product_bar_html(product){
        var html = '<div class="product_bar">' +
                        '<div class="row mLR0 pLR0">' +
                            '<div class="col-xs-2 product_name" style="background-color:'+ product.color +'">' +
                                product.name +
                            '</div>' +

                            '<div class="col-xs-8 text-center">' +
                                    '<div class="extremes_' + product.id + ' extremes"></div>' +
                            '</div>' +

                            '<div class="col-xs-2">' +

                            '</div>' +
                        '</div>' +
                    '<div class="row  mLR0 pLR0">' +
                        '<div class="col-xs-2">' +
                        '</div>' +
                        '<div class="col-xs-8  pLR0 text-center pLR0 bg_gray">' +
                               ' <div class="col-xs-4 bm_bg">' +
                                    'LEFT SIDE' +
                                '</div>' +
                                '<div class="col-xs-4 bm_bg">' +
                                    'MID RANGE' +
                                '</div>' +
                                '<div class="col-xs-4 bm_bg">' +
                                    'RIGHT SIDE' +
                                '</div>' +
                        '</div>' +
                    '</div>' +
                    '</div>';
        return html;
    }

    // convert product dimensions titles to object
    function convert_dimension_titles(product){
        var titles = {};
        product.dimensions.forEach(function(title, title_index){
            var title_param = product.id + '_extreme_' + title_index
            /*

            */
            titles[title_param] = {
                0: title.title_0,
                1: title.title_1
            }

        })
        //
        return titles
    }
    //test
    /*convert_dimension_titles(products.sq)
    convert_dimension_titles(products.wpp)*/

    /*sq_exteme_0: {
        0: 'Resistant',
        1: 'Accommodating'
    },*/


    // get 3 extreme dimensions of a product
    function get_extremes(seq_array, seq_names, type){
        var new_array = [];


        seq_array.forEach(function(v,i){
            var seq_obj,
                seq_type = type  + '_extreme_' + i;

            if(v <= 50){
                seq_obj = seq_names[ seq_type ][0]
            }else{
                seq_obj = seq_names[ seq_type ][1]
            }
            var push_obj = Math.abs(v - 50);
            new_array.push(
                {
                'indicator': push_obj,
                'extreme_title': seq_obj
                }
            );
        });

        // sort object-array descending
        new_array.sort(compare);

        // get first 3 (biggest) elements of sorted (desc) array
        var extremes =  Array.prototype.slice.call(new_array, 0, 3);
        $('.extremes_' + type).append('<i class="fa fa-info-circle has-popover" data-toggle="popover"  data-content="These are the most extreme scores from the personality"></i>');
        // append in element
        extremes.forEach(function(v){
            $('.extremes_' + type).append('<span class="extreme_scores" style="background-color:'+ products[type].color +'">' + v.extreme_title + '</span>')
            //$('.extremes_' + type + '_compact').append('<li class="extreme_scores">' + v.extreme_title + '</li>')
        });

    }

    // extreme icons popover
    $('body').popover({
      selector: '.has-popover',
      trigger:'hover',
      placement: 'auto'
    });


    function generate_dimension_html( products ){
        var html = '';

        $.each(JSON.parse(display_products), function(i,v){


            if(v.productVisibility === true){
                //
                var index = v.product,
                    product = products[v.product];
                //$.each(products, function(index, product){

                    html += product_bar_html(product);
                    html += '<div class="product pLR0">';
                    $.each(product.dimensions, function(dim_index, dim){
                        var btn = '<div class="btn-group dimensions_buttons" role="group">' +
                                        '<button id="dimension_'+ index +'_' + dim_index +'_button" type="button" class="btn btn-icon btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-cog"></i></button>' +
                                        '<ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">' +
                                            '<li><a href="#">Dimension Details</a></li>' +
                                            '<li><a href="#">Full Details</a></li>' +
                                        '</ul>' +
                                    '</div>';
                        html += '<div class="row row_dimension mLR0 relative" id="dimension_'+ index +'_' + dim_index +'">' +
                                    '<div class="col-xs-2 text-right">' +
                                        '<div class="dimension_title">' + dim.title_0  + '</div>' +
                                        '<div class="dimension_text hidden-xs hidden-sm">' + dim.text_0 + '</div>' +
                                    '</div>' +
                                    '<div class="col-xs-8 bg_gray pLR0 minHeight50">' +
                                        '<div id="'+ index + '_' + dim_index + '_0"  class="benchmarks bg_color_0"></div>' +
                                        '<div id="'+ index + '_' + dim_index + '_1"  class="benchmarks bg_color_1"></div>' +
                                        '<div id="'+ index +'_' + dim_index + '"  class="indicators"></div>' +
                                        '<div id="'+ index + '_' + dim_index + '_2"  class="benchmarks bg_color_2"></div>' +
                                        '<div id="'+ index + '_' + dim_index + '_3"  class="benchmarks bg_color_3"></div>' +
                                        '<div class="col-xs-4 bm_bg"></div>' +
                                        '<div class="col-xs-4 bm_bg"></div>' +
                                        '<div class="col-xs-4 bm_bg"></div>' +

                                    '</div>' +
                                    '<div class="col-xs-2 text-left">' +
                                        '<div class="dimension_title">' + dim.title_1  + '</div>' +
                                         '<div class="dimension_text hidden-xs hidden-sm">' + dim.text_1 + '</div>' +
                                    '</div>' +
                                          btn +
                                '</div>';

                    })
                    html += '</div>';
                //});
            }  // product visibility
        });

        return html;
    }

    function draw_benchmark(sequence, dimension, dimension_index, title){




        if(! sequence){

            return;
        }
        var sub = sequence.substring(1),
            group_1 = sub.match(/.{1,4}/g),
            seq_array = [],
            gauge_metrics = {},
            i = 0;

            if(group_1){
                group_1.forEach(function(el){
                    var el_2 = el.match(/.{1,2}/g);
                    seq_array.push([el_2[0], el_2[1]]);
                });
            }else{

            }


            // move last array element to second position for WPP sequence
            /*if(dimension == 'wpp'){
                var arr_length = seq_array.length - 1;
                // restructure the array for this dimension only (last element becomes second)
                seq_array.move_array_element(arr_length, 1);
            }*/
            if(seq_array){
                $.each(seq_array, function(index, val){


                    var current_slider = document.getElementById(dimension + '_' + index + '_' + dimension_index);

                    current_slider.noUiSlider.set(val);
                    i++;
                });
            }
    }




    // selector: `product`_`dimension_index`_`hash[index]`
    // e.g "wpp_6_3f15"
    function generate_dimension(products, indicators, benchmarks){
        //first clean summry view
        $('#summary_view').empty();

        // append new summary
        $('#summary_view').append(generate_dimension_html(products))




        // default BMs and
        $('.benchmarks').each(function(index, value){

               noUiSlider.create(value, {
                   start: [0,0],
                   connect: true,
                   range: {
                       'min': 1,
                       'max': 99
                   }
               });
           });
        $('.benchmarks').attr('disabled', true);

        // render BMs
        var i = 0;
        for(var key in benchmarks){


            if(benchmarks[key].Codes){
            $.each(benchmarks[key].Codes, function(prod_id, prod_seq){
            // do we  have indicator scores for this product/




                if(indicators[prod_id] && (prod_seq.length > 0)){

                    draw_benchmark(prod_seq, prod_id, i, 'tralala')
                }else{

                }
            })
            }else{

            }

            i++;
        }

        // render indicators
        for(var key in indicators){
            var j = 0;
            var ind_array = indicator_string_convert(indicators[key])
            var product_names = convert_dimension_titles(products[key])

            get_extremes(ind_array, product_names, key)

            ind_array.forEach(function(v, i){


                var ind_id = document.getElementById(key + '_' + j)
                ind_id.setAttribute('disabled', true)

                noUiSlider.create(ind_id, {
                    start: [v],
                    connect: true,
                    tooltips: false,
                    range: six_dim_sliders
                })
                j++
            })
        }
    }


    // Benchmarks window
    var demoSetBody = $('#demo-set-body'), demoSetBtn = $('#demo-set-btn');
    // show on page load
    demoSetBody.collapse('show')

    $('#demo-btn-close-settings, #demo-set-btn').on('click', function (e) {
        e.preventDefault();
        if (demoSetBody.hasClass('in')) {


            demoSetBody.collapse('hide')
        }
        //demoSetBtn.trigger('click')
    });



    // test BM obj
    /*var bms = [
        {
            sq: 'S809965998599156580992565',
            wpp: 'W6090509940992080209955992080',
            //wva: 'V159915991599159915991599'
        },
        {
            //sq: 'S559950992599359935992599',
            wpp: 'W1590509940992080209955992080',
            wva: 'V153915991599159915991579',
            dsq: 'D153915991599159915991579'
        },
        {
            sq: 'S559950992599359935992599',
            wpp: 'W4570509940992080209955993080',
            //wva: 'V658915991599159915991569',
            dsq: 'D153915991599159915991579'
        },
        {
            sq: 'S152940596579359935992599',
            wpp: 'W0570509940992080209955993080',
            wva: 'V018915991599159915991569',
            dsq: 'D103020405060708090991545'
        }
    ]*/

    var bms;
    $.ajax({
        method: 'GET',
        url: 'assets/js/benchmarks.json'
    }).done(function(response){
        $('#bm_list').slimScroll({
                //width: '300px',
                alwaysVisible: true,
            })
        .append(generate_bms_html(response));
        bms = response;





       // calculate_position_fit('sq', (bms[0].wpp));


    }).fail(function(xhr){

    })



    // demo gauges
    var opts = {
            lines: 10, // The number of lines to draw
            angle: 0, // The length of each line
            lineWidth: 0.41, // The line thickness
            pointer: {
                length: 0.75, // The radius of the inner circle
                strokeWidth: 0.035, // The rotation offset
                color: 'rgba(0, 0, 0, 0.38)' // Fill color
            },
            limitMax: 'true', // If true, the pointer will not go past the end of the gauge
            colorStart: '#ccc', // Colors
            colorStop: '#fff', // just experiment with them
            strokeColor: '#8d8d8d', // to see which ones work best for you
            generateGradient: true
        };


        var target_1 = document.getElementById('demo-gauge-1'); // your canvas element
        var target_2 = document.getElementById('demo-gauge-2'); // your canvas element
        var target_3 = document.getElementById('demo-gauge-3'); // your canvas element
        var target_4 = document.getElementById('demo-gauge-4'); // your canvas element
        var gauge_1 = new Gauge(target_1).setOptions(opts); // create sexy gauge!
        var gauge_2 = new Gauge(target_2).setOptions(opts); // create sexy gauge!
        var gauge_3 = new Gauge(target_3).setOptions(opts); // create sexy gauge!
        var gauge_4 = new Gauge(target_4).setOptions(opts); // create sexy gauge!
        gauge_1.maxValue = 100; // set max gauge value
        gauge_1.animationSpeed = 32; // set animation speed (32 is default value)
        gauge_1.set(57); // set actual value
        gauge_1.setTextField(document.getElementById("demo-gauge-text-1"));

        gauge_2.maxValue = 100; // set max gauge value
        gauge_2.animationSpeed = 32; // set animation speed (32 is default value)
        gauge_2.set(97); // set actual value
        gauge_2.setTextField(document.getElementById("demo-gauge-text-2"));

        gauge_3.maxValue = 100; // set max gauge value
        gauge_3.animationSpeed = 32; // set animation speed (32 is default value)
        gauge_3.set(77); // set actual value
        gauge_3.setTextField(document.getElementById("demo-gauge-text-3"));

        gauge_4.maxValue = 100; // set max gauge value
        gauge_4.animationSpeed = 32; // set animation speed (32 is default value)
        gauge_4.set(37); // set actual value
        gauge_4.setTextField(document.getElementById("demo-gauge-text-4"));




        /*
        * Calculate benchmark's arithmethic mean
        * return (int)
        */
        function benchmark_mean(interval){
            return (((+interval[0]) + (+interval[1])) / 2).toFixed();
        }

        /*
        * Calculate benchmark's position by determining it's arithmethic mean's position
        * return (int)
        */
        function benchmark_mean_position(mean){
            var position;
            if(mean >= 0 && mean <= 24){
                position = 'left';
            }else if(mean >= 25 && mean <= 49){
                position = 'mid_left';
            }else if(mean >= 50 && mean <= 74){
                position = 'mid_right';
            }else if(mean >= 75 && mean <= 99){
                position = 'right'
            }

            return position;
        }


        function calculate_bench_postionfit(indicator_position, benchmark_interval){
        indicator_position =  (+indicator_position);

        // penalty points should be returned, and the sum of all penalty points should be deducted
        // from 100

        var penalty_points = 0,
            benchmark_interval_0 = benchmark_interval[0],
            benchmark_interval_1 = benchmark_interval[1],
            inidicator_range_pos,
            difference;

            // find benchmark's mean
            var mean = benchmark_mean(benchmark_interval);

            // find benchmark's mean position
            var bench_mean_pos = benchmark_mean_position(mean);

        // first, test if the indicator is inside bench. interval
        if( indicator_position >= benchmark_interval_0 && indicator_position <= benchmark_interval_1 ){

            return penalty_points;



        }else{ // indicator is not inside the bench. interval, NEGATIVE score is awarded

            // compare indicator position with mean position
            if(indicator_position < mean){ // indicator is both, outside bench. interval and in a low range
                // check if the mean is on the better or worse side, and give appropriate quote(_low or _high)
                if(bench_mean_pos == 'left' || bench_mean_pos == 'mid_left'){
                    // indicator is on mean's "better" side, so low quote negative points awarded
                    inidicator_range_pos = 'quote_low'; // `quote_low` is object key in `fit_positions.js`

                }else if(bench_mean_pos == 'mid_right' || bench_mean_pos == 'right'){
                    // indicator is on mean's "worse" side, so higher quote negative points awarded
                    inidicator_range_pos = 'quote_high'; // `quote_high` is object key in `fit_positions.js`
                }

                // calculate difference between low end interval and indicator position, since the
                // the indicator is in low range
               difference = benchmark_interval_0 - indicator_position;

            }else if(indicator_position > mean){

                // check if the mean is on the better or worse side, and give appropriate quote(_low or _high)
                if(bench_mean_pos == 'left' || bench_mean_pos == 'mid_left'){
                    // indicator is on mean's "worse" side, so higher quote negative points awarded
                    inidicator_range_pos = 'quote_high';
                }else if(bench_mean_pos == 'mid_right' || bench_mean_pos == 'right'){
                    // indicator is on mean's "better" side, so lower quote negative points awarded
                    inidicator_range_pos = 'quote_low';
                }

                // calculate difference between indicator position and high end interval, since the
                // the indicator is in high range
                difference = indicator_position - benchmark_interval_1;
            }


            // get fit quotient
            var quotient = fit_position[bench_mean_pos][inidicator_range_pos]
                // calculate penalty points
                penalty_points = difference * quotient;
        }




        // return penalty
        return penalty_points;
        //return score;
    }


    // calculate posiiton fit for benchmark for product
    function calculate_position_fit(product, bm_seq){
        var seq = bm_string_convert(bm_seq),
            bm_seq_count = seq.length,
            negative_points = [],
            sum_negative_points;



        seq.forEach(function(val, ind){


            negative_points.push(calculate_bench_postionfit(50, val));
        });



        sum_negative_points = negative_points.reduce(function(sum, value) {
          return sum + value;
        }, 0);



    }


    // Polyfills
    // -- Object.assign()
    if (typeof Object.assign != 'function') {
      // Must be writable: true, enumerable: false, configurable: true
      Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) { // .length of function is 2
          'use strict';
          if (target == null) { // TypeError if undefined or null
            throw new TypeError('Cannot convert undefined or null to object');
          }

          var to = Object(target);

          for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];

            if (nextSource != null) { // Skip over if undefined or null
              for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }
          return to;
        },
        writable: true,
        configurable: true
      });
    }
    // --end Object.assign()

})();