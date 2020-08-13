/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'l2',
                type: 'image',
                rect: ['-1781px', '-159px','3980px','407px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/carryer/master/images/l.svg','0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 't2',
                type: 'image',
                rect: ['-1700px', '-40px','3820px','286px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/carryer/master/images/t.svg','0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['174px', '130px','260px','29px','auto', 'auto'],
                text: "* вартість дзвінків згідно тарифів Вашого оператора",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 9, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: '_2',
                type: 'image',
                rect: ['142px', '7px','142px','136px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px']
            },
            {
                id: '_1',
                type: 'image',
                rect: ['4px', '7px','142px','136px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: '_3',
                type: 'image',
                rect: ['278px', '7px','142px','136px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__1}": [
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["style", "left", '4px'],
                ["style", "top", '7px']
            ],
            "${_Text}": [
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '174px'],
                ["style", "font-size", '9px'],
                ["style", "top", '130px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '29px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "width", '260px']
            ],
            "${__2}": [
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["style", "left", '142px'],
                ["style", "top", '7px']
            ],
            "${__3}": [
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["style", "left", '278px'],
                ["style", "top", '7px']
            ],
            "${_l2}": [
                ["style", "top", '-160px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '407px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-1781px'],
                ["style", "width", '3980px']
            ],
            "${_t2}": [
                ["style", "top", '-46px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '286px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-1700px'],
                ["style", "width", '3820px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(204,228,206,1.00)'],
                ["style", "width", '420px'],
                ["style", "height", '150px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9980,
            autoPlay: true,
            timeline: [
                { id: "eid113", tween: [ "transform", "${__2}", "scaleX", '1', { fromValue: '0'}], position: 5692, duration: 653 },
                { id: "eid114", tween: [ "transform", "${__2}", "scaleX", '0', { fromValue: '1'}], position: 9500, duration: 480 },
                { id: "eid75", tween: [ "transform", "${_t2}", "scaleX", '0.1', { fromValue: '0'}], position: 0, duration: 750 },
                { id: "eid115", tween: [ "transform", "${__2}", "scaleY", '1', { fromValue: '0'}], position: 5692, duration: 653 },
                { id: "eid116", tween: [ "transform", "${__2}", "scaleY", '0', { fromValue: '1'}], position: 9500, duration: 480 },
                { id: "eid105", tween: [ "transform", "${__3}", "scaleX", '1', { fromValue: '0'}], position: 6347, duration: 653 },
                { id: "eid106", tween: [ "transform", "${__3}", "scaleX", '0', { fromValue: '1'}], position: 9500, duration: 480 },
                { id: "eid85", tween: [ "transform", "${_l2}", "scaleY", '0.1', { fromValue: '0'}], position: 0, duration: 750 },
                { id: "eid104", tween: [ "style", "${_t2}", "top", '40px', { fromValue: '-46px'}], position: 4750, duration: 300 },
                { id: "eid100", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 800 },
                { id: "eid83", tween: [ "style", "${_l2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750 },
                { id: "eid97", tween: [ "style", "${_l2}", "opacity", '0', { fromValue: '1'}], position: 4250, duration: 800 },
                { id: "eid77", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750 },
                { id: "eid94", tween: [ "style", "${_t2}", "opacity", '0', { fromValue: '1'}], position: 4250, duration: 800 },
                { id: "eid128", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '0'}], position: 162, duration: 588 },
                { id: "eid107", tween: [ "transform", "${__3}", "scaleY", '1', { fromValue: '0'}], position: 6347, duration: 653 },
                { id: "eid108", tween: [ "transform", "${__3}", "scaleY", '0', { fromValue: '1'}], position: 9500, duration: 480 },
                { id: "eid109", tween: [ "transform", "${__1}", "scaleX", '1', { fromValue: '0'}], position: 5000, duration: 653 },
                { id: "eid110", tween: [ "transform", "${__1}", "scaleX", '0', { fromValue: '1'}], position: 9500, duration: 480 },
                { id: "eid79", tween: [ "transform", "${_t2}", "scaleY", '0.1', { fromValue: '0'}], position: 0, duration: 750 },
                { id: "eid111", tween: [ "transform", "${__1}", "scaleY", '1', { fromValue: '0'}], position: 5000, duration: 653 },
                { id: "eid112", tween: [ "transform", "${__1}", "scaleY", '0', { fromValue: '1'}], position: 9500, duration: 480 },
                { id: "eid126", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '0'}], position: 162, duration: 588 },
                { id: "eid81", tween: [ "transform", "${_l2}", "scaleX", '0.1', { fromValue: '0'}], position: 0, duration: 750 },
                { id: "eid102", tween: [ "style", "${_l2}", "top", '-231px', { fromValue: '-160px'}], position: 4750, duration: 300 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-290436");
