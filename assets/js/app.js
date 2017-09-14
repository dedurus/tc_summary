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

   /* function addNodeTo ( target, className ) {
        var div = document.createElement('div');
        addClass(div, className);
        target.appendChild(div);
        return div;
    }*/

    // Disable indicators
    /*var indicator_class = document.getElementsByClassName('indicator');
    Array.prototype.forEach.call(indicator_class, function(v){
        v.setAttribute('disabled', true);
    });*/

    // disable benchmarks
    /*var bench_class = document.getElementsByClassName('benchmark_slider');
    Array.prototype.forEach.call(bench_class, function(v){
        v.setAttribute('disabled', true);
    });*/


    // ----------- Templating ----------- //
    /*function hb_indicator(indicator_name, indicator_index, params){
        var source   = $('#indicator').html(),
            template = Handlebars.compile(source);

        var append = {
                    indicator_name: indicator_name,
                    indicator_index: indicator_index
                }
        var html = template(append);
        $("#indicator_placeholder").html(html)
    }*/


    /*Handlebars.registerHelper('indicator', function(value){
      return value;
    });*/




    // ----------- FUNCTIONS --------------- //

    // Prepare product parameters
    /*function prepare_param(param){
        var sub = param.substring(1),
            group = sub.match(/.{1,2}/g);

            return group;
    }*/

    // generate unique CSS id
    function uniqueId() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
  }

    /**
    * Indicator generation
    * id (string) - id of the product
    * value (obj) - indicator value
    * range - depends of type of products (six_dim_sliders/six_dim_sliders etc)
    */
   /* function generate_indicator(id, value, type){
        var pips;

        // TODO: change this to be dynmic
        if(type = 6){
            pips = six_dim_sliders;
        }

        $('.summary_view').append('<div id="'+ id +'_indicator" class="indicators"></div>')
        var slider_id = document.getElementById(id + '_indicator');
        slider_id.setAttribute('disabled', true)

        noUiSlider.create(slider_id, {
            start: [value],
            connect: true,
            tooltips: false,
            range: pips
        });
    }*/


    /*function bm_html(){
        var pips = six_dim_sliders;
        var tag_id =  uniqueId();
            $("<div>", {id: "tag_id", "class": "a"});

            var bm_id = document.getElementById(tag_id)


            noUiSlider.create(bm_id, {
                start: [50, 80],
                connect: true,
                tooltips: false,
                range: pips
            });

        return html;
    }*/

   /* function generate_benchmark(id, range, type, index){

        var  pips;

        // TODO: change this to be dynmic
        if(type = 6){
            pips = six_dim_sliders;
        }

        $("#summary_view").append(div);

        $('.summary_view').append('<div id="'+ tag_id +'" class="benchmarks bg_color_'+ index +'"></div>')

        var bm_id = document.getElementById(tag_id);
        bm_id.setAttribute('disabled', true)

        noUiSlider.create(bm_id, {
            start: range,
            connect: true,
            tooltips: false,
            range: pips
        });

    }*/

    /*function generate_dimension_html(){
        var html, generated = '';

        for(var i = 1; i <=1; i++){
            if(i === 3){
                generated += generate_indicator('sq', 70, 6);
            }
            generated +=generate_benchmark('sq', [60,90], 6, i);
        }

        html += '<div class="row">' +
                    '<div class="col-md-8">' +
                    generated +
                   '</div>' +
               '</div>';
        return html;
    }*/


   /* function generate_product(name){

        var product = products[name];



        $.each(product.dimensions, function(index, value){


        })
    }*/

    // test
    //var param = 's908070605040';
    //hb_indicator('sq', '0', prepare_param(param));
    //generate_indicator('sq', 50, 6);
    /*generate_benchmark('sq', [50,80], 6, 1);
    generate_benchmark('sq', [50,80], 6, 2);
    generate_benchmark('sq', [50,80], 6, 3);
    generate_benchmark('sq', [50,80], 6, 4);*/

    /*for(var i = 1; i <=4; i++){
        if(i === 3){
            generate_indicator('sq', 70, 6);
        }
        generate_benchmark('sq', [60,90], 6, i);
    }*/

    //generate_product('sq')

    //generate_dimension_html();

   /* var sq_0 = document.getElementById('sq_0');
    noUiSlider.create(sq_0, {
        start: [50],
        connect: true,
        tooltips: false,
        range: six_dim_sliders
    });
    */

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

    function bm_arrays_seq(string_convert, bm_uid_array){

    }

    // 4 BMs, 4 hashes
    var hashes = [uniqueId(), uniqueId(), uniqueId(), uniqueId()]

    function generate_dimension_html( products, hashes ){
        var html = '';
        $.each(products, function(index, product){
            html += '<div class="product pLR0">';
            $.each(product.dimensions, function(dim_index, dim){
                html += '<div class="row row_dimension mLR0" id="dimension_'+ index +'">' +
                            '<div class="col-md-2">' +
                                '<div class="dimension_title">' + dim.title_0  + '</div>' +
                                '<div class="dimension_text">' + dim.text_0 + '</div>' +
                            '</div>' +
                            '<div class="col-md-8">' +
                                '<div id="'+ index + '_' + dim_index + '_0"  class="benchmarks bg_color_0"></div>' +
                                '<div id="'+ index + '_' + dim_index + '_1"  class="benchmarks bg_color_1"></div>' +
                                '<div id="'+ index +'_' + dim_index + '"  class="indicators"></div>' +
                                '<div id="'+ index + '_' + dim_index + '_2"  class="benchmarks bg_color_2"></div>' +
                                '<div id="'+ index + '_' + dim_index + '_3"  class="benchmarks bg_color_3"></div>' +
                            '</div>' +
                            '<div class="col-md-2 text-right">' +
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


    function render_bms(hashes, bm_sequences){

        for(var key in bm_sequences){


            var seq_array = bm_string_convert(bm_sequences[key])


            for(var i = 0; i < products[key].dimension_number; i++){
                hashes.forEach(function(value, index){


                    var bm_id = document.getElementById('bm_' + value + '_' + index)


                })
            }
        }
    }



    // selector: `product`_`dimension_index`_`hash[index]`
    // e.g "wpp_6_3f15"
    function generate_dimension(products, indicators, benchmarks){

        $('#summary_view').append(generate_dimension_html(products, hashes))

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
            console.log(key);
            console.log(indicators[key]);
            var ind_array = indicator_string_convert(indicators[key])
            console.log(ind_array);
            ind_array.forEach(function(v, i){
                console.log(v);
                console.log(i);
                var ind_id = document.getElementById(key + '_' + j)
                console.log(key + '_' + j, ind_id);
                noUiSlider.create(ind_id, {
                    start: [v],
                    connect: true,
                    tooltips: false,
                    range: six_dim_sliders
                })
                j++
            })
        }

        // render indicators
       /* dim_uid_array.forEach( function(element, index) {
            var ind = document.getElementById('ind_' + element)

            noUiSlider.create(ind, {
                start: [50],
                connect: true,
                tooltips: false,
                range: six_dim_sliders
            })
        });*/

        //var  j = 0;

       /* $.each(products, function(index, product){
            var bm_sequences = bm_string_convert(benchmarks[j][index]),
                dimensions = product.dimensions;

           // hashes.forEach(function (value, ind) {


           // $.each(dimensions, function(dim_index, dim_data){
            $.each(bm_sequences, function(dim_index, dim_data){
            var i = 0;

                var bm_id = document.getElementById(index + '_' + dim_index + '_' +  hashes[i])


                noUiSlider.create(bm_id, {
                    start: [bm_sequences[dim_index][0], bm_sequences[dim_index][1]],
                    connect: true,
                    tooltips: false,
                    range: six_dim_sliders
                })
            i++;
            })*/

            //})
           /* j++

        })*/


        // selector: `product`_`dimension_index`_`hash[index]`
        // e.g "wpp_6_3f15"


        var bm_lengh = benchmarks.length;
        /*$.each(benchmarks, function(index, sequences){
            var bm_iterator = 0;



            $.each(sequences, function(product_id, seq){



                var seq_array = bm_string_convert(seq);


                $.each(seq_array, function(seq_index, array){


                    var bm_id = document.getElementById(product_id + '_' + seq_index + '_' + hashes[bm_iterator] + '_' + bm_iterator )


                    if(bm_iterator === bm_lengh){
                        return;
                    }

                    noUiSlider.create(bm_id, {
                        start: [seq_array[seq_index][0], seq_array[seq_index][1]],
                        connect: true,
                        tooltips: false,
                        range: six_dim_sliders
                    })
                    bm_iterator++;
                });

            })
        })*/



        //$('#summary_view').append(html);





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

    //render_bms(hashes, bms)




    generate_dimension(products, indicators, bms)

})();