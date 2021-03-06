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

    // disable benchamarks
    var bench_class = document.getElementsByClassName('benchmark_slider');
    Array.prototype.forEach.call(bench_class, function(v){
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
                tooltips: false,
                //tooltips: [wNumb({ decimals: 0 })],
                /*
                pips: {
                        mode: 'range',
                        density: 1
                },*/
                range: pips
            });

            //$('#' + type + '_' + i).find('.noUi-tooltip').tooltip({
            /*$('#' + type + '_' + i).find('.noUi-tooltip').popover({
                //'title': params[i],
                'content': params[i],
                'placement': 'auto',
                'trigger': 'hover',
                'template':     '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
            });*/
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



    //--- ./ Helpers --- //



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

    function get_name(){
        var query = getQueryParams(document.location.search),
            employee_name;
        if(query.First && query.Last){
            employee_name = query.First + ' ' + query.Last
        }

        return employee_name;
    }

    function add_name(){
        $('.persons_name').html(get_name());
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
            gauge_metrics = {},
            i = 0;

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
                i++;
            });
    }

    // keeps all selected becnhmark libraries
    var checked_obj = {};

    // disable lib btn
    $('.use_lib').prop('disabled', true);

    // fill `checked_obj` with lib values or remove them if deselected
    $('#presets_form').on('change', function(evt) {

        //$('.canvas_holders').empty();

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

    // remove checked libs on `X` button
    $(document).on('click', '.remove_checked_lib', function(e){
        e.preventDefault();
        var clicked = $(this).attr('id');
        var splitted = clicked.split('-');
        $('#' + splitted[0]).attr('checked', false);
        $('#' + splitted[0] + splitted[0]).remove();

        delete checked_obj[splitted[0]];

        // prevent more than 4 checked libs
        if (Object.getOwnPropertyNames(checked_obj).length >= 4){
            $('input[name="presets"]').not(':checked').prop('disabled', true);
        }else{
            $('input[name="presets"]').prop('disabled', false);
        }

    });



    // prepared library object (???)
    var lib_object_prepared = {};


    function split_lib_seq(lib_seq){
        var count = 0,
            seq_elements = [];

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

           // Draw Benchmarks
           draw_benchmark(seq_data.data_sq, 'sq', i, checked_obj[key].title);
           draw_benchmark(seq_data.data_wpp, 'wpp', i, checked_obj[key].title);
           draw_benchmark(seq_data.data_wva, 'wva', i, checked_obj[key].title);

           // DRAW Position Fit GAUGES ----
           console.log(seq_data.data_sq);
           //gauge_render(seq_data.data_sq, 'sq1', checked_obj[key].title, i);
           gauge_render_wpp(seq_data.data_wpp, checked_obj[key].title, i);
           //gauge_render(seq_data.data_wva, 'wva1', checked_obj[key].title, i);

           i++;
       }

       // insert lib titles
        titles.forEach(function(ind, val){
           $('.lib_titles').append('<div class="mini_box_wrapper"><span class="mini_box mini_box_' + val + '"></span>' + ind + '</div>' )
       });
    }


    $('#presets_form').on('submit', function(e){
        e.preventDefault();
        $('.canvas_holders').empty();
        // reset current benchmarks
        $('.lib_titles').html('');
        $('.benchmark_slider').each(function(index, value){
            var cid = document.getElementById(this.id);
            cid.noUiSlider.set([0,0]);
        });

        // RESET Position Fit Gauges
        // .......


        prepare_lib_seq(checked_obj);
        // console.log(checked_obj);
        $('#seq_modal').modal('hide');
    });

    $('.comparison_libs').on('click', function(e){
        e.preventDefault();
        $('#seq_modal').modal('show');
    });




    // NOT USED YET
    function valid_query(){
        var query = getQueryParams(document.location.search),
            valid = query.valid;

    }

    // ***** MODAL ****** //
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
    });
    // ***** ./ MODAL ****** //



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


    // ******* SUMMARY REPORTS ******* //
    function generate_dimension_summary(query_id){
        var dim_score = get_dimension_score(query_id),
            range_calc = calculate_range_score((+dim_score[0]), dim_score[1]);

        return get_dimension_score(query_id); // LOL, testing
    }

    /**
    * Get individual dimension score base on button id (e.g. `#sq1_5`)
    * return - array [individual_score, benchmark_type]
    */
    function get_dimension_score(query_id){
        var query = getQueryParams(document.location.search),
            id_ready = query_id.split('_'),
            params = prepare_param(query[id_ready[0]]),
            dimension_score = params[id_ready[1]];

        return [dimension_score, id_ready[0]];
    }

    // calculate range score (Left/Mid/Right/....)
    function calculate_range_score(score, benchmark_type){
        var return_val;

        // check `sq1` and `wva1` types
        if(benchmark_type == 'sq1'){
            if(score <= 25){
                return_val = 'Left Side';
            }else if(score >= 25 && score <= 75 ){
                return_val = 'Mid Range';
            }else if(score > 75){
                return_val = 'Right Side';
            }else{ // default
                return_val = 'Mid Range';
            }
        }else if(benchmark_type == 'wva1'){
            if(score <= 25){
                return_val = 'Low Range';
            }else if(score >= 25 && score <= 75 ){
                return_val = 'Average Range';
            }else if(score > 75){
                return_val = 'High Range';
            }else{ // default
                return_val = 'High Range';
            }
        }else if(benchmark_type == 'wc1'){ // WPP benchmark type
            switch(true){
                case (score <= 20):
                    return_val = 'Left Side';
                    break;
                case (score > 20 && score <= 40):
                    return_val = 'Mid Left';
                    break;
                case (score > 40 && score <= 60):
                    return_val = 'Mid Range';
                    break;
                case (score > 60 && score <= 80):
                    return_val = 'Mid Right';
                    break;
                case (score > 80):
                    return_val = 'Right Side';
                    break;
                default:
                    return_val = 'Mid Range';
                    break;
            }
        }

        return return_val;
    }





    // SQ/DSQ Summaries
    $('.reports_generator').on('click', function(e){
        e.preventDefault();

        var report_id = $(this).attr('data-report');

        /*if($('#checkbox_sq_all').is(':checked')){
            $('#checkbox_sq_all').prop('checked', false);
        }*/

        // check if the data is fetched through assigned CSS class
        if (!$(this).hasClass("fetched")) {
            // no class `fetched` on the link, so add it and prepare data
            $(this).addClass("fetched");
            var dim_sum = generate_dimension_summary(report_id),
                dim_response = sq_positive[report_id],
                dim_safety = sq_safety[report_id],
                dim_question_1 = sq_questions_1[report_id],
                dim_question_2 = sq_questions_2[report_id],
                dim_range = calculate_range_score((+dim_sum[0]), dim_sum[1]),
                dimension_title = dim_response.title,
                positive = dim_response[dim_sum[0]],
                pos_html = $.parseHTML(positive),
                questions = '<li>' + dim_question_1[dim_sum[0]] + '</li><li>' + dim_question_2[dim_sum[0]] + '</li>',
                employee_name = get_name();

            $('.employee_name').html(employee_name);
            $('.dimension_title_' + report_id).html(dimension_title);
            $('.range_' + report_id).html(dim_range);

            $('.positive_' + report_id).html(pos_html);
            $('.management_' + report_id).html(dim_safety[dim_sum[0]]);
            $('.questions_' + report_id).html(questions);

        }

        // toggle
        $('#slide_report_' + report_id ).slideToggle();
        // checkbox

        var checkbox_toggle = $('input[id="checkbox_' + report_id + '"]');

        checkbox_toggle.prop('checked', !checkbox_toggle[0].checked);
    });


   $('input[class="reports_generator_checkbox"]').on('change', function(){
        var report_id = $(this).attr('data-report');

        /*if(!$(this).is(':checked')){
            $('#checkbox_sq_all').prop('disabled', false).prop('checked', false);
        }*/

        // check if the data is fetched through assigned CSS class
        if (!$(this).hasClass("fetched")) {
            // no class `fetched` on the link, so add it and prepare data
            $(this).addClass("fetched");
            var dim_sum = generate_dimension_summary(report_id),
                dim_response = sq_positive[report_id],
                dim_safety = sq_safety[report_id],
                dim_question_1 = sq_questions_1[report_id],
                dim_question_2 = sq_questions_2[report_id],
                dim_range = calculate_range_score((+dim_sum[0]), dim_sum[1]),
                dimension_title = dim_response.title,
                positive = dim_response[dim_sum[0]],
                pos_html = $.parseHTML(positive),
                questions = '<li>' + dim_question_1[dim_sum[0]] + '</li><li>' + dim_question_2[dim_sum[0]] + '</li>',
                employee_name = get_name();

            $('.employee_name').html(employee_name);
            $('.dimension_title_' + report_id).html(dimension_title);
            $('.range_' + report_id).html(dim_range);

            $('.positive_' + report_id).html(pos_html);
            $('.management_' + report_id).html(dim_safety[dim_sum[0]]);
            $('.questions_' + report_id).html(questions);

        }

        // toggle
        $('#slide_report_' + report_id ).slideToggle();
   });




   // WVA Summaries -------
    $('.reports_generator_wva').on('click', function(e){
        e.preventDefault();

        var report_id = $(this).attr('data-report');

        /*if($('#checkbox_wva_all').is(':checked')){
            $('#checkbox_wva_all').prop('checked', false);
        }*/

        // check if the data is fetched through assigned CSS class
        if (!$(this).hasClass("fetched")) {
            // no class `fetched` on the link, so add it and prepare data
            $(this).addClass("fetched");
            var dim_sum = generate_dimension_summary(report_id),

                dim_question_1 = wva_questions_1[report_id],
                dim_question_2 = wva_questions_2[report_id],
                dim_range = calculate_range_score((+dim_sum[0]), dim_sum[1]),
                dimension_title = dim_question_1.title,

                questions = '<li>' + dim_question_1[dim_sum[0]] + '</li><li>' + dim_question_2[dim_sum[0]] + '</li>',
                employee_name = get_name();

            $('.employee_name').html(employee_name);
            $('.dimension_title_' + report_id).html(dimension_title);
            $('.range_' + report_id).html(dim_range);

            $('.questions_' + report_id).html(questions);

        }

        // toggle
        $('#slide_report_' + report_id ).slideToggle();
        // checkbox

        var checkbox_toggle = $('input[id="checkbox_' + report_id + '"]');

        checkbox_toggle.prop('checked', !checkbox_toggle[0].checked);
    });


   $('input[class="reports_generator_checkbox_wva"]').on('change', function(){
        var report_id = $(this).attr('data-report');

        /*if(!$(this).is(':checked')){
            $('#checkbox_wva_all').prop('disabled', false).prop('checked', false);
        }*/


        // check if the data is fetched through assigned CSS class
        if (!$(this).hasClass("fetched")) {
            // no class `fetched` on the link, so add it and prepare data
            $(this).addClass("fetched");
            var dim_sum = generate_dimension_summary(report_id),

                dim_question_1 = wva_questions_1[report_id],
                dim_question_2 = wva_questions_2[report_id],
                dim_range = calculate_range_score((+dim_sum[0]), dim_sum[1]),
                dimension_title = dim_question_1.title,

                questions = '<li>' + dim_question_1[dim_sum[0]] + '</li><li>' + dim_question_2[dim_sum[0]] + '</li>',
                employee_name = get_name();

            $('.employee_name').html(employee_name);
            $('.dimension_title_' + report_id).html(dimension_title);
            $('.range_' + report_id).html(dim_range);

            $('.questions_' + report_id).html(questions);

        }

        // toggle
        $('#slide_report_' + report_id ).slideToggle();
   });


    // WPP Summaries
    $('.reports_generator_wc1').on('click', function(e){
        e.preventDefault();

        var report_id = $(this).attr('data-report');

        // check if the data is fetched through assigned CSS class
        if (!$(this).hasClass("fetched")) {
            // no class `fetched` on the link, so add it and prepare data
            $(this).addClass("fetched");
            var dim_sum = generate_dimension_summary(report_id),
                dim_response = wpp_positive[report_id], // `wpp_positive` is global var holding JSON since to no database yet,
                dim_coach = wpp_coach[report_id],
                dim_jobfit = wpp_jobfit[report_id],
                dim_management = wpp_management[report_id],
                dim_question_1 = wpp_questions_1[report_id],
                dim_question_2 = wpp_questions_2[report_id],
                dim_range = calculate_range_score((+dim_sum[0]), dim_sum[1]),
                dimension_title = dim_response.title,
                positive = dim_response[dim_sum[0]],
                pos_html = $.parseHTML(positive),
                questions = '<li>' + dim_question_1[dim_sum[0]] + '</li><li>' + dim_question_2[dim_sum[0]] + '</li>',
                employee_name = get_name();

            $('.employee_name').html(employee_name);
            $('.dimension_title_' + report_id).html(dimension_title);
            $('.range_' + report_id).html(dim_range);

            $('.positive_' + report_id).html(pos_html);
            $('.coach_' + report_id).html(dim_coach[dim_sum[0]]);
            $('.jobfit_' + report_id).html(dim_jobfit[dim_sum[0]]);
            $('.management_' + report_id).html(dim_management[dim_sum[0]]);
            $('.questions_' + report_id).html(questions);
        }

        // toggle
        $('#slide_report_' + report_id ).slideToggle();
        // checkbox

        var checkbox_toggle = $('input[id="checkbox_' + report_id + '"]');

        checkbox_toggle.prop('checked', !checkbox_toggle[0].checked);
    });


   $('input[class="reports_generator_checkbox_wpp"]').on('change', function(){
        var report_id = $(this).attr('data-report');

        // check if the data is fetched through assigned CSS class
        if (!$(this).hasClass("fetched")) {
            // no class `fetched` on the link, so add it and prepare data
            $(this).addClass("fetched");
            var dim_sum = generate_dimension_summary(report_id),
                dim_response = wpp_positive[report_id],
                dim_coach = wpp_coach[report_id],
                dim_jobfit = wpp_jobfit[report_id],
                dim_management = wpp_management[report_id],
                dim_question_1 = wpp_questions_1[report_id],
                dim_question_2 = wpp_questions_2[report_id],
                dim_range = calculate_range_score((+dim_sum[0]), dim_sum[1]),
                dimension_title = dim_response.title,
                positive = dim_response[dim_sum[0]],
                pos_html = $.parseHTML(positive),
                questions = '<li>' + dim_question_1[dim_sum[0]] + '</li><li>' + dim_question_2[dim_sum[0]] + '</li>',
                employee_name = get_name();

            $('.employee_name').html(employee_name);
            $('.dimension_title_' + report_id).html(dimension_title);
            $('.range_' + report_id).html(dim_range);

            $('.positive_' + report_id).html(pos_html);
            $('.coach_' + report_id).html(dim_coach[dim_sum[0]]);
            $('.jobfit_' + report_id).html(dim_jobfit[dim_sum[0]]);
            $('.management_' + report_id).html(dim_management[dim_sum[0]]);
            $('.questions_' + report_id).html(questions);
        }

        // toggle
        $('#slide_report_' + report_id ).slideToggle();
   });




   // Toggle all WVA reports (NOT USED!!!!!!!!!)
   /*$('#checkbox_wva_all').on('change', function(){
        var check_all = $(this),
            checks = $('.reports_generator_checkbox_wva');

            if(check_all.is(':checked')){
                $('.slide_reports_wva').slideUp().slideDown();
                checks.prop('checked', true);
            }else{
                checks.prop('checked', false);
                $('.slide_reports_wva').slideUp();
            }
            // console.log(check_all.is(':checked'));

        $.each(checks, function(ind, val){
            //$(this).toggleClass('sq_all_open');
            //$(this).prop('disabled', checked_status);
            var report_id = $(this).attr('data-report');


            // check if the data is fetched through assigned CSS class
            if (!$(this).hasClass("fetched")) {
                // no class `fetched` on the link, so add it and prepare data
                $(this).addClass("fetched");
                var dim_sum = generate_dimension_summary(report_id),

                    dim_question_1 = wva_questions_1[report_id],
                    dim_question_2 = wva_questions_2[report_id],
                    dim_range = calculate_range_score((+dim_sum[0]), dim_sum[1]),
                    dimension_title = dim_question_1.title,

                    questions = '<li>' + dim_question_1[dim_sum[0]] + '</li><li>' + dim_question_2[dim_sum[0]] + '</li>',
                    employee_name = get_name();

                $('.employee_name').html(employee_name);
                $('.dimension_title_' + report_id).html(dimension_title);
                $('.range_' + report_id).html(dim_range);

                $('.questions_' + report_id).html(questions);

            }

        });
   });*/

   // Toggle SQ/DSQ dimensions
   $('#checkbox_sq_all').on('change', function(){
        $('#all_sq_dimensions').slideToggle(800);
   });

   // Toggle WPP dimensions
   $('#checkbox_wpp_all').on('change', function(){
        $('#all_wpp_dimensions').slideToggle(800);
   });

   // Toggle WVA dimensions
   $('#checkbox_wva_all').on('change', function(){
        $('#all_wva_dimensions').slideToggle(800);
   });

    // ******* ./ SUMMARY REPORTS ******* //


    // ******* Gauges ******* //


    /*
    * Render gauges (SQ/WVA)
    * sequence (mixed object)
    */
    function gauge_render(sequence, product, bench_title, canvas_index){
        var sub = sequence.substring(1),
            group_1 = sub.match(/.{1,4}/g),
            seq_array = [],
            scores = 0,
            query = getQueryParams(document.location.search),
            final_score = 0,
            i = 0;


        //get indicator position(s) from URL param
        var sq_prepared = prepare_param(query[product]);
        console.log(sq_prepared);

        if(group_1){
            group_1.forEach(function(el){
                var el_2 = el.match(/.{1,2}/g);
                seq_array.push([el_2[0], el_2[1]]);
            });
        }
        //console.log(seq_array);
        seq_array.forEach(function(val){
            // sum of scores
            scores += indicator_towards_benchmark( sq_prepared[i], [(+val[0]), (+val[1])] );
            //console.log('Scores', scores);
            i++;
        });

        // calculate final score
        if(scores){
            final_score = 100 - scores;
        }
        console.log('Final score (deduction based)', final_score);

        // average of scores
        // DEPRECATED
        /*final_score = (scores / 6).toFixed();
        console.log('Final Score:',final_score);*/

        // render
        gauage_drawing(product, canvas_index, bench_title, final_score);

    }

    /*
    * Render gauges (WPP)
    */
    function gauge_render_wpp(sequence, bench_title, canvas_index){
        var sub = sequence.substring(1),
            group_1 = sub.match(/.{1,4}/g),
            seq_array = [],
            scores = 0,
            query = getQueryParams(document.location.search),
            final_score = 0,
            i = 0;
            /*console.log('Sequence:', sequence);
            console.log('Seq substring:', sub);
            console.log('Benchmark title:', bench_title);
            console.log('Canvas Index:', canvas_index);*/

        //get indicator position(s) from URL param
        var sq_prepared = prepare_param(query['wc1']);
        console.log(sq_prepared);

        if(group_1){
            group_1.forEach(function(el){
                var el_2 = el.match(/.{1,2}/g);
                seq_array.push([el_2[0], el_2[1]]);
            });
        }

        var arr_length = seq_array.length - 1,
            sq_prepared_length = sq_prepared.length - 1;
        // restructure the array for this dimension only (last element becomes second)
        seq_array.move_array_element(arr_length, 1);
        sq_prepared.move_array_element(sq_prepared_length, 1);
        console.log(sq_prepared);



        //console.log(seq_array);
        seq_array.forEach(function(val){
            // sum of scores
            scores += indicator_towards_benchmark( sq_prepared[i], [(+val[0]), (+val[1])] );
            //console.log('Scores', scores);
            i++;
        });

        // calculate final score
        if(scores){
            final_score = 100 - scores;
        }
        console.log('Final score (deduction based)', final_score);

        // average of scores (7 dimension for WPP)
        // DEPRECATED
        /*final_score = (scores / 7).toFixed();
        console.log('Final Score:',final_score);*/

        // render
        gauage_drawing('wc1', canvas_index, bench_title, final_score);

    }


    function gauage_drawing(product, canvas_index, bench_title, final_score){

        var canvas_id =  product + '_gauge_' + canvas_index;
        $('#' + canvas_id + '_holder').append('<canvas class="canvas"  id="' + canvas_id + '"></canvas>')
                                      .append('<p class="greenCo"><span class="canvas_percent" id="' + product + '_gauge_value_' + canvas_index + '"></span>%</p>')
                                      .append(' <p class="' + product + '_canvas_title_' + canvas_index + ' bg_'+ canvas_index + ' whiteCo mB0">' + bench_title  +'</p>');



        // final score is 0, meaning no benchmark sequence is set on benchmark for this product
        if(final_score == 0){
            $('#' + product + '_gauge_' + canvas_index).parent().parent().css('opacity', 0.65);
            //$('#' + product + '_gauge_' + canvas_index).parent().addClass('hidden');
        }else{
            $('#' + product + '_gauge_' + canvas_index).parent().parent().css('opacity', 1);
            //$('#' + product + '_gauge_' + canvas_index).parent().removeClass('hidden');
        }

        var target = document.getElementById(canvas_id); // canvas
        var gauge_value = product + '_gauge_value_' + canvas_index;

        init_gauge(canvas_id, gauge_value, canvas_index, final_score);

    }

    // init gauge
    function init_gauge(gauge_id, gauge_value, canvas_index, final_score = 0){
        var target = document.getElementById(gauge_id); // canvas

        var gauge = new Gauge(target).setOptions(gauge_render_options[canvas_index]);

        gauge.setTextField(document.getElementById(gauge_value));
        gauge.maxValue = 100; // set max gauge value
        gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
        gauge.animationSpeed = 32; // set animation speed (32 is default value)
        if(final_score == 0 || final_score == ''){
            gauge.set(0); // set actual value
            console.log(final_score);
        }else{
            gauge.set(final_score); // set actual value
        }
    }


    /*
    * Calculate indicator position towards benchamrk interval
    * return - score for indicator towards the tested benchamrk
    */
    function indicator_towards_benchmark(indicator_position, benchmark_interval){
        indicator_position =  (+indicator_position);

        // Using `score` is deprecated since it isn't per specs, and gives wrong calculation
        // only the penalty points should be returned, and the sum of all penalty points should be deducted
        // from 100

        var score = 100,
            penalty_points = 0,
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
            console.info('START DIMENSION ---------------');
            console.log('~~~ INSIDE ~~~~');
            console.info('Penalty: ', penalty_points);
            console.log('~~~ .//////INSIDE ~~~~');
            console.log('END DIMENSION ---------------');
            console.log('-----------------------------');

            // DEPRECATED !!!!
             // indicator is inside benchmark interval, so FULL (100) score is awarded
             //return score;
            //score = 100;

        }else{ // indicator is not inside the bench. interval, NEGATIVE score is awarded

            // compare indicator position with mean position
            if(indicator_position < mean){ // indicator is both, outside bench. interval and in a low range

                // check if the mean is on the better or worse side, and give appropriate quote(_low or _high)
                if(bench_mean_pos == 'left' || bench_mean_pos == 'mid_left'){
                    console.log('I<M. Mean', bench_mean_pos);
                    // indicator is on mean's "better" side, so low quote negative points awarded
                    inidicator_range_pos = 'quote_low'; // `quote_low` is object key in `gauges_settings.js`

                }else if(bench_mean_pos == 'mid_right' || bench_mean_pos == 'right'){

                    // indicator is on mean's "worse" side, so higher quote negative points awarded
                    inidicator_range_pos = 'quote_high'; // `quote_high` is object key in `gauges_settings.js`

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
            console.info('START DIMENSION ---------------');
            console.log('Indicator Position:', indicator_position);
            console.log('Benchmark Lowest:', benchmark_interval_0);
            console.log('Benchmark Highest:', benchmark_interval_1);
            console.log('Benchmark Mean:', mean);
            console.log('Bench Mean Position:', bench_mean_pos);
            console.log('Allocated Fit Quote', fit_position[bench_mean_pos][inidicator_range_pos]);

            // get fit quotient
            var quotient = fit_position[bench_mean_pos][inidicator_range_pos]
                // calculate penalty points
                penalty_points = difference * quotient;
            console.log('Differece (indicator/benchmark):', difference);
            //console.log('Penalty Points Scored for Dimension:', difference * quotient);



            // Deprecated
           /* score = 100 - (difference * quotient);
            console.log('Dimension Score---->', score);*/


        }

        console.log('Penalty Points Scored for Dimension: ', penalty_points);
        console.info('END DIMENSION ---------------');
        console.log('-----------------------------');

        // return penalty
        return penalty_points;
        //return score;
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

    /*
    * Calculate benchmark's arithmethic mean
    *
    */
    function benchmark_mean(interval){
        return (((+interval[0]) + (+interval[1])) / 2).toFixed();
    }

    // show position fit report
    $('#sq_pos_fit_btn').on('click', function(e){
        e.preventDefault();
        var gauge_panel = $(this).attr('data-canvas-wrapper');
        $(this).toggleClass('fit_active');
        $('#' + gauge_panel).slideToggle().promise().done(function() {
            if( $('#sq_toggle_arrow').hasClass('fa-angle-double-up') ) {
                $('#sq_toggle_arrow').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
            }else{
                $('#sq_toggle_arrow').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
            };
        });
    });

    $('#wpp_pos_fit_btn').on('click', function(e){
        e.preventDefault();
        var gauge_panel = $(this).attr('data-canvas-wrapper');
        $(this).toggleClass('fit_active');
        $('#' + gauge_panel).slideToggle().promise().done(function() {
            if( $('#wpp_toggle_arrow').hasClass('fa-angle-double-down') ) {
                $('#wpp_toggle_arrow').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
            }else{
                $('#wpp_toggle_arrow').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
            };
        });
    });

    $('#wva_pos_fit_btn').on('click', function(e){
        e.preventDefault();
        var gauge_panel = $(this).attr('data-canvas-wrapper');
        $(this).toggleClass('fit_active');
        $('#' + gauge_panel).slideToggle().promise().done(function() {
            if( $('#wva_toggle_arrow').hasClass('fa-angle-double-down') ) {
                $('#wva_toggle_arrow').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
            }else{
                $('#wva_toggle_arrow').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
            };
        });
    });

    // show panels when modal is active (needed to render canvases)
   /* $('#seq_modal').on('shown.bs.modal', function (e) {
      $('.product_canvases').slideDown();
    });*/

    // hide panels when modal is hidden
    /*$('#seq_modal').on('hidden.bs.modal', function (e) {
        setTimeout(function(){
          $('.product_canvases').slideUp();
        }, 1500);
        console.log(checked_obj);
    });*/

    // ******* ./Gauges ******* //


    // export btn
   /* $('.material-button-toggle').on("click", function () {
        $(this).toggleClass('open');
        $('.option').toggleClass('scale-on');
    });*/
    $('.material-button').tooltip({
        'title': 'Export Report',
        'container': 'body'
    });



    // Let's play init
    sq_average();
    generate_sq_report(sq_seq_names);
    generate_wpp_report(sq_seq_names);
    generate_wva_report(wva_seq_names);
    add_name();
    set_date();

    // test only (not used yet)
    //valid_query();

})();

