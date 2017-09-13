// ------------------------
        // GLOBALS
// ------------------------

// product definitions
var products = {
    sq: {
        id: 'sq',
        name: 'SQ',
        color: '#1b9c6a',
        dimension_number: 6,
        dimensions: [
            {
                title_0: 'Resistant',
                title_1: 'Accommodating',
                text_0: 'Questions existing rules and processes, may be resistant to feedback. ',
                text_1: 'Follows rules and processes without questioning. '
            },
            {
                title_0: 'Anxious',
                title_1: 'Calm',
                text_0: 'Quickly feels stress in unexpected or unfamiliar situations.',
                text_1: 'Even-tempered, stress tolerant, calm under pressure.'
            },
            {
                title_0: 'Impatient',
                title_1: 'Patient',
                text_0: 'Becomes annoyed or irritated when under stress. ',
                text_1: 'Not easily frustrated or annoyed by others.'
            },
            {
                title_0: 'Distractable',
                title_1: 'Focused',
                text_0: 'Seeks stimulation and variety. May become distracted.',
                text_1: 'Less likely to seek stimulation &amp; variety. Able to ignore distractions'
            },
            {
                title_0: 'Impulsive',
                title_1: 'Cautious',
                text_0: 'Decides quickly, may underestimate consequences of actions.',
                text_1: 'Tends to carefully evaluate situations before deciding.'
            },
            {
                title_0: 'Thrill-Seeking',
                title_1: 'Apprehensive',
                text_0: 'Seeks excitement and adventure, comfortable with uncertainty and risk. ',
                text_1: 'Tends to avoid or be uncomfortable with risk and uncertainty.'
            }
        ],
        callback: '',
    },
    wpp: {
        id: 'wpp',
        name: 'WPP',
        color: '#1b9c6a',
        dimension_number: 7,
        dimensions: [
            {
                title_0: 'WPP1',
                title_1: 'WPP2',
                text_0: 'Questions existing rules and processes, may be resistant to feedback. ',
                text_1: 'Follows rules and processes without questioning. '
            },
            {
                title_0: 'Anxious',
                title_1: 'Calm',
                text_0: 'Quickly feels stress in unexpected or unfamiliar situations.',
                text_1: 'Even-tempered, stress tolerant, calm under pressure.'
            },
            {
                title_0: 'Impatient',
                title_1: 'Patient',
                text_0: 'Becomes annoyed or irritated when under stress. ',
                text_1: 'Not easily frustrated or annoyed by others.'
            },
            {
                title_0: 'Distractable',
                title_1: 'Focused',
                text_0: 'Seeks stimulation and variety. May become distracted.',
                text_1: 'Less likely to seek stimulation &amp; variety. Able to ignore distractions'
            },
            {
                title_0: 'Impulsive',
                title_1: 'Cautious',
                text_0: 'Decides quickly, may underestimate consequences of actions.',
                text_1: 'Tends to carefully evaluate situations before deciding.'
            },
            {
                title_0: 'Thrill-Seeking',
                title_1: 'Apprehensive',
                text_0: 'Seeks excitement and adventure, comfortable with uncertainty and risk. ',
                text_1: 'Tends to avoid or be uncomfortable with risk and uncertainty.'
            },
            {
                title_0: 'WPP LAST 0',
                title_1: 'WPP LAST 1',
                text_0: 'Seeks excitement and adventure, comfortable with uncertainty and risk. ',
                text_1: 'Tends to avoid or be uncomfortable with risk and uncertainty.'
            }
        ],
        callback: '',
    },
}
    /*,
    {
        id: 'wpp',
        name: 'WPP',
        color: '',
        dimension_number: 7,
    },
    {
        id: 'wva',
        name: 'WVA',
        color: '',
        dimension_number: 6,
        callback: '',
    }*/


//
var product_1_dimensions = {
    sq_exteme_title_0: {
        title_0: 'Resistant',
        title_1: 'Accommodating'
    },
    sq_exteme_title_1: {
        title_0: 'Anxious',
        title_1: 'Calm'
    },
    sq_exteme_2: {
        title_0: 'Impatient',
        title_1: 'Patient'
    },
    sq_exteme_3: {
        title_0: 'Distractable',
        title_1: 'Focused'
    },
    sq_exteme_4: {
        title_0: 'Impulsive',
        title_1: 'Cautious'
    },
    sq_exteme_5: {
        title_0: 'Thrill-Seeking',
        title_1: 'Apprehensive'
    },
}

var product_2_dimensions = {
    wpp_exteme_title_0: {
        title_0: 'Non-Dominant',
        title_1: 'Dominant'
    },
    wpp_exteme_title_1: {
        title_0: 'Contented',
        title_1: 'Achievement-Focused'
    },
    wpp_exteme_2: {
        title_0: 'Reactive',
        title_1: 'Calm'
    },
    wpp_exteme_3: {
        title_0: 'Reserved',
        title_1: 'Outgoing'
    },
    wpp_exteme_4: {
        title_0: 'Direct',
        title_1: 'Empathetic'
    },
    wpp_exteme_5: {
        title_0: 'Spontaneous',
        title_1: 'Regimented'
    },
    wpp_exteme_6: {
        title_0: 'Conventional',
        title_1: 'Open-minded'
    },
}

var product_3_dimensions = {
    wva_exteme_title_0: {
        title_0: 'Low Integrity',
        title_1: 'High Integrity'
    },
    wva_exteme_title_1: {
        title_0: 'Low Responsibility',
        title_1: 'High Responsibility'
    },
    wva_exteme_2: {
        title_0: 'Low Coachability',
        title_1: 'High Coachability'
    },
    wva_exteme_3: {
        title_0: 'Low Positivity',
        title_1: 'High Positive Attitude'
    },
    wva_exteme_4: {
        title_0: 'Low Aggression Control',
        title_1: 'High Aggression Control'
    },
    wva_exteme_5: {
        title_0: 'Low Communication',
        title_1: 'High Open Communication'
    },
}