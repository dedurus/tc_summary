(function() {

    'use strict';

    var sq_sliders = {
            'min': [0],
            '25': [25],
            '50': [50],
            '75': [75],
            'max': [100]
        },
        wpp_sliders = {
            'min': [0],
            '20': [20],
            '40': [40],
            '60': [60],
            '80': [80],
            'max': [100]
        };


    // SQ dom elements
    var
    //slider_1 = document.getElementById('sq_1'),
            sq_1_b_1 = document.getElementById('sq_1_b_1'),
            sq_1_b_2 = document.getElementById('sq_1_b_2'),
            sq_1_b_3 = document.getElementById('sq_1_b_3'),
            sq_1_b_4 = document.getElementById('sq_1_b_4'),

    //slider_2 = document.getElementById('sq_2'),
            sq_2_b_1 = document.getElementById('sq_2_b_1'),
            sq_2_b_2 = document.getElementById('sq_2_b_2'),
            sq_2_b_3 = document.getElementById('sq_2_b_3'),
            sq_2_b_4 = document.getElementById('sq_2_b_4'),

    //slider_3 = document.getElementById('sq_3'),
            sq_3_b_1 = document.getElementById('sq_3_b_1'),
            sq_3_b_2 = document.getElementById('sq_3_b_2'),
            sq_3_b_3 = document.getElementById('sq_3_b_3'),
            sq_3_b_4 = document.getElementById('sq_3_b_4'),

   // slider_4 = document.getElementById('sq_4'),
            sq_4_b_1 = document.getElementById('sq_4_b_1'),
            sq_4_b_2 = document.getElementById('sq_4_b_2'),
            sq_4_b_3 = document.getElementById('sq_4_b_3'),
            sq_4_b_4 = document.getElementById('sq_4_b_4'),

    //slider_5 = document.getElementById('sq_5'),
            sq_5_b_1 = document.getElementById('sq_5_b_1'),
            sq_5_b_2 = document.getElementById('sq_5_b_2'),
            sq_5_b_3 = document.getElementById('sq_5_b_3'),
            sq_5_b_4 = document.getElementById('sq_5_b_4'),

    //slider_6 = document.getElementById('sq_6'),
            sq_6_b_1 = document.getElementById('sq_6_b_1'),
            sq_6_b_2 = document.getElementById('sq_6_b_2'),
            sq_6_b_3 = document.getElementById('sq_6_b_3'),
            sq_6_b_4 = document.getElementById('sq_6_b_4')
    ;

    // SQ Sliders

    // 1.
    noUiSlider.create(sq_1_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_1_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_1_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_1_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // ./ -- 1. --- //

    // 2. -----
    noUiSlider.create(sq_2_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_2_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_2_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_2_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 2. -- //


    // 3. -----
    noUiSlider.create(sq_3_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_3_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_3_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_3_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 3. -- //


    // 4. -----
    noUiSlider.create(sq_4_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_4_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_4_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_4_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 4. -- //


    // 5. -----
    noUiSlider.create(sq_5_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_5_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_5_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_5_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 5. -- //


    // 6. -----
    noUiSlider.create(sq_6_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_6_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_6_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_6_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 6. -- //

    // --- ./ SQ Benchmarks --- //


    // --- WPP Benchmarks --- //
    // 1. -----
    noUiSlider.create(wpp_1_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_1_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_1_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_1_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 1. -- //

    // 2. -----
    noUiSlider.create(wpp_2_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_2_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_2_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_2_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 2. -- //

    // 3. -----
    noUiSlider.create(wpp_3_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_3_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_3_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_3_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 3. -- //

    // 1. -----
    noUiSlider.create(wpp_4_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_4_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_4_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_4_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 4. -- //

    // 5. -----
    noUiSlider.create(wpp_5_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_5_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_5_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_5_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 5. -- //

    // 6. -----
    noUiSlider.create(wpp_6_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_6_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_6_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_6_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 6. -- //

    // 7. -----
    noUiSlider.create(wpp_7_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_7_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_7_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_7_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 7. -- //

    // --- ./ WPP Benchmarks --- //




    // --- WVA Benchmarks --- //
    // 1. -----
    noUiSlider.create(wva_1_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_1_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_1_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_1_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 1. -- //

    // 2. -----
    noUiSlider.create(wva_2_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_2_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_2_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_2_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 2. -- //

    // 3. -----
    noUiSlider.create(wva_3_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_3_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_3_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_3_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 3. -- //

    // 1. -----
    noUiSlider.create(wva_4_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_4_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_4_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_4_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 4. -- //

    // 5. -----
    noUiSlider.create(wva_5_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_5_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_5_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_5_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 5. -- //

    // 6. -----
    noUiSlider.create(wva_6_b_1, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_6_b_2, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_6_b_3, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_6_b_4, {
        start: [0, 0],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 6. -- //
    // --- ./ WVA Benchmarks --- //


    // Disable idicators
    var indicator_class = document.getElementsByClassName('indicator');
    Array.prototype.forEach.call(indicator_class, function(v){
        v.setAttribute('disabled', true);
    });


    // ----------- Objects/Properties --------------- //
    var sq_seq_names = {
        sq_exteme_0: {
            0: 'Resistant',
            1: 'Accommodating'
        },
        sq_exteme_1: {
            0: 'Anxious',
            1: 'Calm'
        },
        sq_exteme_2: {
            0: 'Impatient',
            1: 'Patient'
        },
        sq_exteme_3: {
            0: 'Distractable',
            1: 'Focused'
        },
        sq_exteme_4: {
            0: 'Impulsive',
            1: 'Cautious'
        },
        sq_exteme_5: {
            0: 'Thrill-Seeking',
            1: 'Apprehensive'
        },
    }

    var wpp_seq_names = {
        wpp_exteme_0: {
            0: 'Non-Dominant',
            1: 'Dominant'
        },
        wpp_exteme_1: {
            0: 'Contented',
            1: 'Achievement-Focused'
        },
        wpp_exteme_2: {
            0: 'Reactive',
            1: 'Calm'
        },
        wpp_exteme_3: {
            0: 'Reserved',
            1: 'Outgoing'
        },
        wpp_exteme_4: {
            0: 'Direct',
            1: 'Empathetic'
        },
        wpp_exteme_5: {
            0: 'Spontaneous',
            1: 'Regimented'
        },
        wpp_exteme_6: {
            0: 'Conventional',
            1: 'Open-minded'
        },
    }

    var wva_seq_names = {
        wva_exteme_0: {
            0: 'Low Integrity',
            1: 'High Integrity'
        },
        wva_exteme_1: {
            0: 'Low Responsibility',
            1: 'High Responsibility'
        },
        wva_exteme_2: {
            0: 'Low Coachability',
            1: 'High Coachability'
        },
        wva_exteme_3: {
            0: 'Low Positivity',
            1: 'High Positive Attitude'
        },
        wva_exteme_4: {
            0: 'Low Aggression Control',
            1: 'High Aggression Control'
        },
        wva_exteme_5: {
            0: 'Low Communication',
            1: 'High Open Communication'
        },
    }


    // ----------- FUNCTIONS --------------- //

    // idicator generation
    function generate_idicators(params, type){
        var pips;
        if(type === 'wpp'){
            pips = wpp_sliders;
        }else{
            pips = sq_sliders;
        }
        for(var i = 0; i < params.length; i++){
            var slider_id = document.getElementById(type + '_' + i);

            noUiSlider.create(slider_id, {
                start: [params[i]],
                connect: true,
                tooltips: [wNumb({ decimals: 0 })],
                pips: {
                        mode: 'range',
                        density: 1
                },
                range: pips
            });
        }
    }


    // get 3 extreme dimensions
    function get_extremes(seq_array, seq_names, type){
        var new_array = [];
        seq_array.forEach(function(v,i){
            //
            var seq_obj,
                seq_type = type  + '_exteme_' + i;

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
            $('.extremes_' + type).append('<span class="extreme_scores">' + v.extreme_title + '</span>')
        });

    }

    // Helpers -----
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

    // get query param
    function getQueryParams(qs) {
        qs = qs.split('+').join(' ');

        var params = {},
            tokens,
            re = /[?&]?([^=]+)=([^&]*)/g;

        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }

        return params;
    }

    // prepare param (convert to array)
    function prepare_param(param){
        var sub = param.substring(1),
            group = sub.match(/.{1,2}/g);

            return group;
    }

    // move array elements through indexes
    Array.prototype.move_array_element = function(old_index, new_index) {
        if (new_index >= this.length) {
            var k = new_index - this.length;
            while ((k--) + 1) {
                this.push(undefined);
            }
        }
        this.splice(new_index, 0, this.splice(old_index, 1)[0]);
        return this; // for testing purposes
    };

    // ./ Helpers



    function generate_sq_report(sq_seq_names){
        var query = getQueryParams(document.location.search);

        if(query.sq1){
            var sq_prepared = prepare_param(query.sq1);
            generate_idicators(sq_prepared, 'sq');

            get_extremes(sq_prepared, sq_seq_names, 'sq');
        }else{
            $('#sq_wrapper').hide();
        }
    }

    function generate_wpp_report(sq_seq_names){
        var query = getQueryParams(document.location.search);

        if(query.wc1){
            var sq_prepared = prepare_param(query.wc1),
                arr_length = sq_prepared.length - 1;
            // restructure the array for this dimension only (last element becomes second)
            sq_prepared.move_array_element(arr_length, 1);

            generate_idicators(sq_prepared, 'wpp');

            get_extremes(sq_prepared, wpp_seq_names, 'wpp');
        }else{
            console.log('no query');
            $('#wpp_wrapper').hide();
        }
    }

    function generate_wva_report(sq_seq_names){
        var query = getQueryParams(document.location.search);

        if(query.wva1){
            var sq_prepared = prepare_param(query.wva1);

            generate_idicators(sq_prepared, 'wva');

            get_extremes(sq_prepared, wva_seq_names, 'wva');
        }else{
            $('#wva_wrapper').hide();
        }
    }

    function add_name(){
        var query = getQueryParams(document.location.search);
        if(query.First && query.Last){
            $('.persons_name').html(query.First + ' ' + query.Last);
        }
    }

    function sq_average(){
         var query = getQueryParams(document.location.search),
            sq_prepared = prepare_param(query.sq1),
            render_avg = '',
            print_avg;

        if(query.sq1){
            //var sampleArray = [1, 2, 3, 4, 5];
            render_avg = sq_prepared.reduce(function(previousValue, currentValue){
                return  parseInt(currentValue) +  parseInt(previousValue);
            });
            //console.log(render_avg/6);
            print_avg = Math.round(render_avg/6);
            //print_avg = (render_avg/6).toFixed(1);
        }else{
            print_avg = '-';
        }
        //console.log(print_avg);
        $('#sq_score').html(print_avg);
    }

    // ----- Bechmark Bars ------ //
    function prepare_benchmark(sequence, benchmark, current_index){
        var sub = sequence.substring(1),
            group_1 = sub.match(/.{1,4}/g),
            seq_array = [],
            i = 1;

            if(group_1){
                group_1.forEach(function(el){
                    var el_2 = el.match(/.{1,2}/g);
                    seq_array.push([el_2[0], el_2[1]]);
                });
            }
            console.log(seq_array);

            $.each(seq_array, function(index, val){
               /*var current_index = 1 + index;
               console.log(current_index);*/
               console.log(benchmark + '_' + i + '_b_' + current_index);
                var current_slider = document.getElementById(benchmark + '_' + i + '_b_' + current_index);
                current_slider.noUiSlider.set(val);
                i++;
            });
    }
    // Tests
    prepare_benchmark('S015001502575257569996799', 'sq', 1);
    prepare_benchmark('S015001502575257569996799', 'sq', 2);
    prepare_benchmark('W5087638307427199012947868299', 'wpp', 3);
    prepare_benchmark('V629925615599699101607199', 'wva', 4);



    // NOT USED YET
    function valid_query(){
        var query = getQueryParams(document.location.search),
            valid = query.valid;
        console.log(valid);
    }

    // Let's play
    sq_average();
    generate_sq_report(sq_seq_names);
    generate_wpp_report(sq_seq_names);
    generate_wva_report(wva_seq_names);
    add_name();

    // test only (not used yet)
    //valid_query();



})();

