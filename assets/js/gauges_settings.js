var fit_position = {
    left: {
        'low'       : 0,
        'high'      : 24,
        'quote_low' : 0.25,
        'quote_high': 0.5
        },
    mid_left: {
        'low'       : 25,
        'high'      : 49,
        'quote_low' : 0.3,
        'quote_high': 0.3
    },
    mid_right: {
        'low'       : 50,
        'high'      : 74,
        'quote_low' : 0.3,
        'quote_high': 0.3
    },
    right: {
        'low'       : 75,
        'high'      : 99,
        'quote_low' : 0.25,
        'quote_high': 0.5
    }
};

var gauge_render_options = {
    '0': {
          angle: 0, // The span of the gauge arc
          lineWidth: 0.19, // The line thickness
          radiusScale: 0.6, // Relative radius
          pointer: {
            length: 0.7, // // Relative to gauge radius
            strokeWidth: 0.064, // The thickness
            color: '#e74d3c' // Fill color
          },
          staticLabels: {
            font: "8px sans-serif",  // Specifies font
            labels: [0, 25, 50, 75, 100],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
          },
          limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
          limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
          colorStart: '#067e55',   // Colors
          colorStop: '#067e55',    // just experiment with them
          strokeColor: '#E0E0E0',  // to see which ones work best for you
          generateGradient: true,
          highDpiSupport: true     // High resolution support
    },
    '1': {
          angle: 0, // The span of the gauge arc
          lineWidth: 0.19, // The line thickness
          radiusScale: 0.6, // Relative radius
          pointer: {
            length: 0.7, // // Relative to gauge radius
            strokeWidth: 0.064, // The thickness
            color: '#e74d3c' // Fill color
          },
          staticLabels: {
            font: "8px sans-serif",  // Specifies font
            labels: [0, 25, 50, 75, 100],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
          },
          limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
          limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
          colorStart: '#AD1F2B',   // Colors
          colorStop: '#AD1F2B',    // just experiment with them
          strokeColor: '#E0E0E0',  // to see which ones work best for you
          generateGradient: true,
          highDpiSupport: true     // High resolution support
    },
    '2': {
          angle: 0, // The span of the gauge arc
          lineWidth: 0.19, // The line thickness
          radiusScale: 0.6, // Relative radius
          pointer: {
            length: 0.7, // // Relative to gauge radius
            strokeWidth: 0.064, // The thickness
            color: '#e74d3c' // Fill color
          },
          staticLabels: {
            font: "8px sans-serif",  // Specifies font
            labels: [0, 25, 50, 75, 100],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
          },
          limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
          limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
          colorStart: '#3A7BBD',   // Colors
          colorStop: '#3A7BBD',    // just experiment with them
          strokeColor: '#E0E0E0',  // to see which ones work best for you
          generateGradient: true,
          highDpiSupport: true     // High resolution support
    },
    '3': {
          angle: 0, // The span of the gauge arc
          lineWidth: 0.19, // The line thickness
          radiusScale: 0.6, // Relative radius
          pointer: {
            length: 0.7, // // Relative to gauge radius
            strokeWidth: 0.064, // The thickness
            color: '#e74d3c' // Fill color
          },
          staticLabels: {
            font: "8px sans-serif",  // Specifies font
            labels: [0, 25, 50, 75, 100],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
          },
          limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
          limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
          colorStart: '#E36C09',   // Colors
          colorStop: '#E36C09',    // just experiment with them
          strokeColor: '#E0E0E0',  // to see which ones work best for you
          generateGradient: true,
          highDpiSupport: true     // High resolution support
    }
};
