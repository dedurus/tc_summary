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
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_1_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_1_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_1_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
    // ./ -- 1. --- //

    // 2. -----
    noUiSlider.create(sq_2_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_2_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_2_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_2_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
    // -- ./ 2. -- //


    // 3. -----
    noUiSlider.create(sq_3_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_3_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_3_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_3_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
    // -- ./ 3. -- //


    // 4. -----
    noUiSlider.create(sq_4_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_4_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_4_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_4_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
    // -- ./ 4. -- //


    // 5. -----
    noUiSlider.create(sq_5_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_5_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_5_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_5_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
    // -- ./ 5. -- //


    // 6. -----
    noUiSlider.create(sq_6_b_1, {
        start: [50, 70],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_6_b_2, {
        start: [18, 60],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_6_b_3, {
        start: [30, 90],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });

    noUiSlider.create(sq_6_b_4, {
        start: [15, 45],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
    // -- ./ 6. -- //


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


    // ----------- FUNCTIONS --------------- //

    // idicator generation
    function generate_idicators(params){
        for(var i = 0; i < params.length; i++){
            var slider_id = document.getElementById('sq_' + i);
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


    // extreme
    function get_extremes(seq_array, seq_names){
        var new_array = [];
        seq_array.forEach(function(v,i){
            //console.log(i);
            var seq_obj;

            if(v <= 50){
                seq_obj = seq_names[ 'sq_exteme_' + i ][0]
            }else{
                seq_obj = seq_names[ 'sq_exteme_' + i ][1]
            }
            var push_obj = Math.abs(v - 50);
            new_array.push(
                {
                'indicator': push_obj,
                'extreme_title': seq_obj
                }
            );
        });
        console.log(new_array);
        new_array.sort(compare);
        console.log(new_array);
         var extremes =  Array.prototype.slice.call(new_array, 0, 3);
        console.log(extremes);

        extremes.forEach(function(v){
            console.log(v.extreme_title);
            $('.extremes').append('<span class="extreme_scores">' + v.extreme_title + '</span>')
        });

    }

    // Helpers -----
    // object sorting
    function sortObject(obj) {
        return Object.keys(obj).sort().reduce(function (result, key) {
            result[key] = obj[key];
            console.log(result[key]);
            console.log(key);
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

    // ./ Helpers



    function generate_sq_report(sq_seq_names){
        var query = getQueryParams(document.location.search),
            sq_param = query.sq1,
            sq_prepared = prepare_param(sq_param);


        generate_idicators(sq_prepared);

        get_extremes(sq_prepared, sq_seq_names);
    }




    // Let's play
    generate_sq_report(sq_seq_names);




})();

