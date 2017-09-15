(function() {
    'use strict';

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
                                'kokok' +
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
            /*console.log(title_param);
            console.log(title);
            console.log(title_index);*/
            titles[title_param] = {
                0: title.title_0,
                1: title.title_1
            }

        })
        //console.log(titles);
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
        console.log(seq_array);
        console.log(seq_names);
        seq_array.forEach(function(v,i){
console.log(v);
console.log(i);
console.log(type  + '_exteme_' + i);
console.log(seq_names[type  + '_extreme_' + i]);
            var seq_obj,
                seq_type = type  + '_extreme_' + i;

                console.log(seq_type);
                console.log(type);


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

        // append in element
        extremes.forEach(function(v){
            $('.extremes_' + type).append('<span class="extreme_scores" style="background-color:'+ products[type].color +'">' + v.extreme_title + '</span>')
            $('.extremes_' + type + '_compact').append('<li class="extreme_scores">' + v.extreme_title + '</li>')
        });

    }




    function generate_dimension_html( products ){
        var html = '';
        $.each(products, function(index, product){
            html += product_bar_html(product);
            html += '<div class="product pLR0">';
            $.each(product.dimensions, function(dim_index, dim){
                html += '<div class="row row_dimension mLR0" id="dimension_'+ index +'_' + dim_index +'">' +
                            '<div class="col-md-2 text-right">' +
                                '<div class="dimension_title">' + dim.title_0  + '</div>' +
                                '<div class="dimension_text">' + dim.text_0 + '</div>' +
                            '</div>' +
                            '<div class="col-md-8 bg_gray pLR0">' +
                                '<div id="'+ index + '_' + dim_index + '_0"  class="benchmarks bg_color_0"></div>' +
                                '<div id="'+ index + '_' + dim_index + '_1"  class="benchmarks bg_color_1"></div>' +
                                '<div id="'+ index +'_' + dim_index + '"  class="indicators"></div>' +
                                '<div id="'+ index + '_' + dim_index + '_2"  class="benchmarks bg_color_2"></div>' +
                                '<div id="'+ index + '_' + dim_index + '_3"  class="benchmarks bg_color_3"></div>' +
                                '<div class="col-xs-4 bm_bg"></div>' +
                                '<div class="col-xs-4 bm_bg"></div>' +
                                '<div class="col-xs-4 bm_bg"></div>' +

                            '</div>' +
                            '<div class="col-md-2 text-left">' +
                                '<div class="dimension_title">' + dim.title_1  + '</div>' +
                                 '<div class="dimension_text">' + dim.text_1 + '</div>' +
                            '</div>' +
                        '</div>';

            })
            html += '</div>';
        })

        return html;
    }

    function draw_benchmark(sequence, dimension, dimension_index, title){
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
            }


            // move last array element to second position for WPP sequence
            /*if(dimension == 'wpp'){
                var arr_length = seq_array.length - 1;
                // restructure the array for this dimension only (last element becomes second)
                seq_array.move_array_element(arr_length, 1);
            }*/

            $.each(seq_array, function(index, val){
                var current_slider = document.getElementById(dimension + '_' + index + '_' + dimension_index);
                current_slider.noUiSlider.set(val);
                i++;
            });
    }




    // selector: `product`_`dimension_index`_`hash[index]`
    // e.g "wpp_6_3f15"
    function generate_dimension(products, indicators, benchmarks){
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
            $.each(benchmarks[key], function(prod_id, prod_seq){
                draw_benchmark(prod_seq, prod_id, i, 'tralala')
            })

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

    // test obj indicators
    var indicators = {
            sq: 's908070605040',
            wpp: 'w10304050607020',
            wva: 'v506070809010'
        }

    // test BM obj
    var bms = [
        {
            sq: 'S809965998599156580992565',
            wpp: 'W6090509940992080209955992080',
            //wva: 'V159915991599159915991599'
        },
        {
            //sq: 'S559950992599359935992599',
            wpp: 'W1590509940992080209955992080',
            wva: 'V153915991599159915991579'
        },
        {
            sq: 'S559950992599359935992599',
            wpp: 'W4570509940992080209955993080',
            wva: 'V658915991599159915991569'
        },
        {
            sq: 'S152940596579359935992599',
            wpp: 'W0570509940992080209955993080',
            wva: 'V018915991599159915991569'
        }
    ]

    // init
    generate_dimension(products, indicators, bms)

})();