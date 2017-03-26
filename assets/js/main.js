(function() {

    'use strict';

    var sq_sliders = {
            'min': [0],
            '25': [25],
            '50': [50],
            '75': [75],
            'max': [100]
        }


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
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_1_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_1_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_1_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // ./ -- 1. --- //

    // 2. -----
    noUiSlider.create(sq_2_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_2_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_2_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_2_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 2. -- //


    // 3. -----
    noUiSlider.create(sq_3_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_3_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_3_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_3_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 3. -- //


    // 4. -----
    noUiSlider.create(sq_4_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_4_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_4_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_4_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 4. -- //


    // 5. -----
    noUiSlider.create(sq_5_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_5_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_5_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_5_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 5. -- //


    // 6. -----
    noUiSlider.create(sq_6_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_6_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_6_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(sq_6_b_4, {
        start: [15, 45],
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
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_1_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_1_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_1_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 1. -- //

    // 2. -----
    noUiSlider.create(wpp_2_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_2_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_2_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_2_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 2. -- //

    // 3. -----
    noUiSlider.create(wpp_3_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_3_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_3_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_3_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 3. -- //

    // 1. -----
    noUiSlider.create(wpp_4_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_4_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_4_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_4_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 4. -- //

    // 5. -----
    noUiSlider.create(wpp_5_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_5_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_5_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_5_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 5. -- //

    // 6. -----
    noUiSlider.create(wpp_6_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_6_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_6_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_6_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 6. -- //

    // 7. -----
    noUiSlider.create(wpp_7_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_7_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_7_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wpp_7_b_4, {
        start: [15, 45],
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
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_1_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_1_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_1_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 1. -- //

    // 2. -----
    noUiSlider.create(wva_2_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_2_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_2_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_2_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 2. -- //

    // 3. -----
    noUiSlider.create(wva_3_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_3_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_3_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_3_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 3. -- //

    // 1. -----
    noUiSlider.create(wva_4_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_4_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_4_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_4_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 4. -- //

    // 5. -----
    noUiSlider.create(wva_5_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_5_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_5_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_5_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });
    // -- ./ 5. -- //

    // 6. -----
    noUiSlider.create(wva_6_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_6_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_6_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 1,
            'max': 99
        }
    });

    noUiSlider.create(wva_6_b_4, {
        start: [15, 45],
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
            0: 'Resistant',
            1: 'Accommodating'
        },
        wva_exteme_1: {
            0: 'Anxious',
            1: 'Calm'
        },
        wva_exteme_2: {
            0: 'Impatient',
            1: 'Patient'
        },
        wva_exteme_3: {
            0: 'Distractable',
            1: 'Focused'
        },
        wva_exteme_4: {
            0: 'Impulsive',
            1: 'Cautious'
        },
        wva_exteme_5: {
            0: 'Thrill-Seeking',
            1: 'Apprehensive'
        },
    }


    // ----------- FUNCTIONS --------------- //

    // idicator generation
    function generate_idicators(params, type){
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
                range: sq_sliders
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

    // get quesry param
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
        var query = getQueryParams(document.location.search),
            sq_param = query.sq1,
            sq_prepared = prepare_param(sq_param);

        generate_idicators(sq_prepared, 'sq');

        get_extremes(sq_prepared, sq_seq_names, 'sq');
    }

    function generate_wpp_report(sq_seq_names){
        var query = getQueryParams(document.location.search),
            sq_param = query.wc1,
            sq_prepared = prepare_param(sq_param),
            arr_length = sq_prepared.length - 1;


            sq_prepared.move_array_element(arr_length, 1);


        generate_idicators(sq_prepared, 'wpp');

        get_extremes(sq_prepared, wpp_seq_names, 'wpp');
    }

    function generate_wva_report(sq_seq_names){
        var query = getQueryParams(document.location.search),
            sq_param = query.wva1,
            sq_prepared = prepare_param(sq_param);

        generate_idicators(sq_prepared, 'wva');

        get_extremes(sq_prepared, wva_seq_names, 'wva');
    }




    // Let's play
    generate_sq_report(sq_seq_names);
    generate_wpp_report(sq_seq_names);
    generate_wva_report(wva_seq_names);




})();

