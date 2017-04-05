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

    // indicator generation
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

            //$('#' + type + '_' + i).find('.noUi-tooltip').tooltip({
            $('#' + type + '_' + i).find('.noUi-tooltip').popover({
                //'title': params[i],
                'content': params[i],
                'placement': 'auto',
                'trigger': 'hover',
                'template':     '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
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

    // eliminate duplicates in array
    function eliminateDuplicates(arr) {
      var i,
          len=arr.length,
          out=[],
          obj={};

      for (i=0;i<len;i++) {
        obj[arr[i]]=0;
      }
      for (i in obj) {
        out.push(i);
      }
      return out;
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
            render_avg = '',
            print_avg;

        if(query.sq1){
            //var sampleArray = [1, 2, 3, 4, 5];
            var sq_prepared = prepare_param(query.sq1);
            render_avg = sq_prepared.reduce(function(previousValue, currentValue){
                return  parseInt(currentValue) +  parseInt(previousValue);
            });
            //
            print_avg = Math.round(render_avg/6);
            //print_avg = (render_avg/6).toFixed(1);
        }else{
            print_avg = '-';
        }
        //
        $('#sq_score').html(print_avg);
    }

    // ----- Bechmark Bars ------ //
    // Default benchmarks
    $('.benchmark_slider').each(function(index, value){
        noUiSlider.create(value, {
            start: [0,0],
            connect: true,
            range: {
                'min': 1,
                'max': 99
            }
        });
    });


    // ----------------------------
    // -- libs checkboxes/sequences
    // ----------------------------
    function draw_benchmark(sequence, dimension, dimension_index, title){
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

            // move last array element to second position for WPP sequence
            if(dimension == 'wpp'){
                var arr_length = seq_array.length - 1;
                // restructure the array for this dimension only (last element becomes second)
                seq_array.move_array_element(arr_length, 1);
            }
            $.each(seq_array, function(index, val){
                var current_slider = document.getElementById(dimension + '_' + index + '_' + dimension_index);
                current_slider.noUiSlider.set(val);
                $('#' + dimension + '_' + index + '_' + dimension_index).find('.noUi-connect').tooltip({
                    'container': 'body',
                    'title': title,
                    'placement': 'auto'
                });
            });
    }

    // keeps all selected becnhmark libraries
    var checked_obj = {};

    // disable lib btn
    $('.use_lib').prop('disabled', true);

    // fill `checked_obj` with lib values or remove them if deselected
    $('#presets_form').on('change', function(evt) {
    $('.use_lib').prop('disabled', false);
       var checked_item = $(evt.target),
            checked_id = evt.target.id,
            title = checked_item.data('title'),
            data_sq = checked_item.data('sq'),
            data_wpp = checked_item.data('wpp'),
            data_wva = checked_item.data('wva');


        if(checked_item.prop('checked')==true){
            checked_obj[checked_id] = {
                    'title': title,
                    'data_sq': data_sq,
                    'data_wpp': data_wpp,
                    'data_wva': data_wva
            };
            $('#sq_seq_preview').append('<div id="' + checked_id +  checked_id  + '" class="sq_checked_lib">' + title + '<a href="#" id="' +  checked_id + '-' + checked_id + '" class="remove_checked_lib close" aria-label="Close"><span aria-hidden="true">&times;</span></a></div>');
        }else{
            $('#' + checked_id + checked_id).remove();
            delete checked_obj[checked_id];
        }

        // prevent more than 4 checked libs
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

    // remove checked libs on `X` button
    $(document).on('click', '.remove_checked_lib', function(){
        var clicked = $(this).attr('id');
        var splitted = clicked.split('-');
        $('#' + splitted[0]).attr('checked', false);
        $('#' + splitted[0] + splitted[0]).remove();
        $('input[name="presets"]').prop('disabled', false);

    });



    // prepared library object
    var lib_object_prepared = {};

    function split_lib_seq(lib_seq){
        var count = 0,
            seq_elements = [];
        //

        for (var key in lib_seq) {
            if (lib_seq.hasOwnProperty(key)) {
                ++count;

                seq_elements.push({
                    'title': lib_seq[key].title,
                    'seq_data': lib_seq[key].checked_data.split('_')
                });
            }
        }
    }


    function prepare_lib_seq(lib_seq){
       var titles = [],
            i = 0;

       for(var key in checked_obj){
            titles.push(checked_obj[key].title);
            var seq_data = checked_obj[key];


           draw_benchmark(seq_data.data_sq, 'sq', i, checked_obj[key].title);
           draw_benchmark(seq_data.data_wpp, 'wpp', i, checked_obj[key].title);
           draw_benchmark(seq_data.data_wva, 'wva', i, checked_obj[key].title);
           i++;
       }

       // insert lib titles
        titles.forEach(function(ind, val){

           $('#lib_titles').append('<div class="mini_box_wrapper"><span class="mini_box mini_box_' + val + '"></span>' + ind + '</div>' )
       });

    }

    $('#presets_form').on('submit', function(e){
        e.preventDefault();
        prepare_lib_seq(checked_obj);
        $('#seq_modal').modal('hide');
    })
    // Tests
    //draw_benchmark('S015001502575257569996799', 'sq', 0);
    //draw_benchmark('S015001502575257569996799', 'wpp', 0);
    //prepare_benchmark('W508763830742719901294786', 'sq', 'wpp');
    //prepare_benchmark('V629925615599699101607199', 'sq', 'wva');



    // NOT USED YET
    function valid_query(){
        var query = getQueryParams(document.location.search),
            valid = query.valid;

    }

    // Let's play

    $('.elements').slimScroll({
        //width: '300px',
        alwaysVisible: true,
    });
    // load json libs
    $.getJSON( "assets/json/codes.json", function( data ) {
     var html = '';
      //var items = '';
      $.each( data, function( key, val ) {
        var codes = val.sq_code + '_' + val.wpp_code + '_' + val.wva_code;
        var sq_badge = val.sq_code ? '<span class="badge sq_badge">SQ</span>' : '<span class="badge sq_badge opacity03">SQ</span>',
            wpp_badge = val.wpp_code ? '<span class="badge wpp_badge">WPP</span>' : '<span class="badge wpp_badge opacity03">WPP</span>',
            wva_badge = val.wva_code ? '<span class="badge wva_badge">WVA</span>' : '<span class="badge wva_badge opacity03">WVA</span>';
        if(val.sq_code){
           sq_badge = '<span class="badge sq_badge">SQ</span>';
        }
        html += '<dd class="preset_dd"><input type="checkbox" class="lib_checkbox" name="presets" id="pq' + key + '_' + key + '" value="' + codes + '"  data-title="' +  val.job_title + '" data-sq="' + val.sq_code + '" data-wpp="' + val.wpp_code + '" data-wva="' + val.wva_code + '" data-job="' + val.job_title + '">';
        html += '<label for="pq' + key + '_' + key + '">' +  val.job_title;
        html += '<div class="pull-right lib_badges">' + sq_badge + wpp_badge + wva_badge + '</div>';

        html += '</label></dd>';
      });

        $('.radio-list-left').append(html);
    });

    // show modal on arrival
    $(window).on('load', function(){
        setTimeout(function(){
            $('#seq_modal').modal();
        }, 500);
    });

    // hide modal on link click
    $('#no_libs').on('click', function(e){
        e.preventDefault();
        $('#seq_modal').modal('hide');
    })



    // Let's play
    sq_average();
    generate_sq_report(sq_seq_names);
    generate_wpp_report(sq_seq_names);
    generate_wva_report(wva_seq_names);
    add_name();

    // test only (not used yet)
    //valid_query();

    // current year
    var current_year = new Date().getFullYear();
    $('#current_year').html(current_year);


    // set date from URL param
    function set_date(){
        var query = getQueryParams(document.location.search),
            date_num = query.date,
            today,
            year, day, month, divided, divided_2;

        if(date_num == '' || date_num == undefined){
            var today = new Date().toDateString();
        }else{
            divided = date_num.match(/.{1,4}/g);
            year = divided[1];
            divided_2 = divided[0].match(/.{1,2}/g);
            month = divided_2[0];
            day = divided_2[1];
            today = new Date(year, month, day).toDateString();
        }
        $('#date').html(today);
    }

    set_date();

})();

