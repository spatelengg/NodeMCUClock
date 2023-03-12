Colors = [];

$(document).ready(function() {

    var scriptBaseUrl = new URL($('head script')[1].src);
    $('head').append('<link rel="stylesheet" href="' + scriptBaseUrl.origin + '/wheelcolorpicker.css" type="text/css" />')
             .append('<link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css" type="text/css" />');

    $.when(
        $.getScript( scriptBaseUrl.origin + "/jquery.wheelcolorpicker.min.js" ),
        $.getScript( "https://code.jquery.com/ui/1.13.2/jquery-ui.js" ),
         
        $.Deferred(function( deferred ){
            $( deferred.resolve );
        })
    ).done(function(){
        init();
        getConfig();
        
        //place your code here, the scripts are all loaded
        
    }); 
});


function init(){
    var body = $('body');
    body.empty();

    var elTime = $('<fieldset><legend>Time</legend></fieldset>')
            .append('<div>Clock Time: <span id="spnClockTime"></span><div>')
            .append('<div>New Time: <input type="datetime-local" id="newTime">')
            .append('<button id="btnSetTime">Set Time</button>');

    var elColor = $('<fieldset><legend>Colors</legend></fieldset>')
            .append('<div>Random Color: <input type="checkbox" id="chkRandomColor" ></div>')
            .append('<div id="divColors"></div>')            
            .append('<div id="divSelectedColors">Selected Colors: <div class="color"><input type="text" id="hourColor" ></div><div class="color"><input type="text" id="minColor" ></div></div>')
            .append('<div>Box Color: <div class="color"><input type="text" id="boxColor" ></div></div>')
            .append('<button id="btnSetColor">Set Color</button>');

    var elBrightness = $('<fieldset><legend>Brightness</legend></fieldset>')
            .append('<div>Auto Brightness: <input type="checkbox" id="chkAutoBright" ></div>')
            .append('<div id="divAutoBright">' + 
                '<div>Sensor Range</div><div><div class="slider-range" id="sliderSensorRange"></div></div>' + 
                '<div>Clock Brightness</div><div class="slider-range" id="sliderClockRange"></div>' + 
                '<div>Box Brightness</div><div class="slider-range" id="sliderBoxRange"></div>' + 
            '</div>')
            .append('<div id="divManualBright">' + 
                    '<div>Clock Brightness</div><div><div class="slider" id="sliderClock"></div></div>' +
                    '<div>Box Brightness</div><div><div class="slider" id="sliderBox"></div></div>' +
                '</div>')
            .append('<div>Blink Box: <input type="checkbox" id="chkBoxBlink" ></div>')
            .append('<button id="btnSetBrightness">Set Brightness</button>');


    var el1 = $('<div><button id="btnRefresh">Refresh</button></div>' + 
                '<div><button id="btnSaveCfg">Save Config</button></div>');

    body.append(elTime);
    body.append(elColor);
    body.append(elBrightness);
    body.append(el1);

    elColor.find('.color input')
        .wheelColorPicker({preview :true});

    elBrightness.find('.slider-range').slider({
        range:true,
        min: 0,
        max: 200,
        values: [50,150]
    });
    elBrightness.find('#sliderSensorRange').slider('option', 'min', 0);
    elBrightness.find('#sliderSensorRange').slider('option', 'max', 1024);

    elBrightness.find('.slider').slider({       
        min: 0,
        max: 200 ,
        value: 50
    });
    
    
    var sec = 0;
    $('#btnSetTime').on('click', function(){
        var newTime = $('#newTime').val();
        if(!newTime)
            return;

        newTime = new Date(newTime);
        
        $.ajax({
            method:'GET',
            url:'/setTime',
            data:{
                year: newTime.getFullYear().toString().substr(-2),
                month: newTime.getMonth() + 1,
                day: newTime.getDate(),
                hour: newTime.getHours(),
                min: newTime.getMinutes(),
                sec: sec++
            }
         })
        .done(function(m){
            //alert(m);
        });
    });

    $('#btnSetColor').on('click', function(){
        var data = {};
        data.cmr = $('#chkRandomColor').prop('checked');
        $('#divColors input').each(function(i,el){
            data['c' + i] = Number('0x' + el.value);
        });        
        data['cs0'] = Number('0x' + $('#hourColor').val());
        data['cs1'] = Number('0x' + $('#minColor').val());
        data.bc = Number('0x' + $('#boxColor').val());

        $.ajax({
            method:'GET',
            url:'/setColors',
            data:data
         })
        .done(function(m){
            //alert(m);
        });
    });

    $("#btnSetBrightness").on('click', function(){
        var data = {};
        data.ba = $('#chkAutoBright').prop('checked');
        data.bb = $('#chkBoxBlink').prop('checked');
        data.bv = $('#sliderClock').slider('value');
        data.bbv = $('#sliderBox').slider('value');

        var svr = $('#sliderSensorRange').slider('values');
        data['svr0'] = 0;
        data['svr1'] = svr[0];
        data['svr2'] = svr[1];
        data['svr3'] = 1024;

        var bvr = $('#sliderClockRange').slider('values');
        data['bvr0'] = 0;
        data['bvr1'] = bvr[0];
        data['bvr2'] = bvr[1];
        data['bvr3'] = 200;

        var bbvr = $('#sliderBoxRange').slider('values');
        data['bbvr0'] = 0;
        data['bbvr1'] = bbvr[0];
        data['bbvr2'] = bbvr[1];
        data['bbvr3'] = 200;
 
        $.ajax({
            method:'GET',
            url:'/setBrightness',
            data:data
         })
        .done(function(m){
            //alert(m);
        });
    });

    $('#chkRandomColor').on('change', function(c){
        var checked = $(this).prop('checked');
        if(checked){
            $('#divSelectedColors').hide();
            $('#divColors').show();
        }
        else{
            $('#divSelectedColors').show();
            $('#divColors').hide();
        }
    });

    $('#chkAutoBright').on('change', function(c){
        var checked = $(this).prop('checked');
        if(checked){
            $('#divAutoBright').show();
            $('#divManualBright').hide();
            
        }
        else{
            $('#divAutoBright').hide();
            $('#divManualBright').show();
        }
    });

    $('#btnRefresh').on('click',function(){
        getConfig();
    });

    $('#btnSaveCfg').on('click',function(){
        $.ajax({
            method:'GET',
            url:'/saveConfig' 
        });
    });
 
}

function getConfig(){
    $.ajax({
        method:'GET',
        url:'/getDetails' 
    })
    .done(updateConfig);
}

function updateConfig(msg) {  
    msg = {
        "clockTime":msg.ct,
        "brightnessAuto":msg.ba,
        "sensorValueRange":msg.svr,
        "brightnessValueRange":msg.bvr,
        "boxBrightnessValueRange":msg.bbvr,
        "brightnessValue":msg.bv,
        "boxBrightnessValue":msg.bbv,
        "boxBlink":msg.bb,
        "boxColor" : msg.bc,
        "colorModeRandom":msg.cmr,
        "colors":msg.c,
        "colorSelection":msg.cs
    };

    
    $('#spnClockTime').text(msg.clockTime);
    $('#chkRandomColor').prop('checked', msg.colorModeRandom).change();
    
    $('#hourColor').wheelColorPicker('setValue',getColorString(msg.colorSelection[0]));
    $('#minColor').wheelColorPicker('setValue',getColorString(msg.colorSelection[1]));
    $('#boxColor').wheelColorPicker('setValue',getColorString(msg.boxColor));
    
    $('#chkAutoBright').prop('checked', msg.brightnessAuto).change();
    $('#chkBoxBlink').prop('checked', msg.boxBlink).change();
    $( "#sliderSensorRange" ).slider( "values", msg.sensorValueRange);
    $( "#sliderClockRange" ).slider( "values", msg.brightnessValueRange);
    $( "#sliderClock" ).slider( "value", msg.brightnessValue);
    $( "#sliderBox" ).slider( "value", msg.boxBrightnessValue);


    Colors = msg.colors;
    var divColor = $("#divColors");
    divColor.empty();
    for(var c in Colors){
        var clr = getColorString(Colors[c]);
        var el = $('<div class="color"><input type="text" ></div>');
        divColor.append(el);
        el.find('input')
            .wheelColorPicker({preview :true})
            .wheelColorPicker('setValue',  clr );         
    } 
    
}

function getColorString(num){
    num = num || 0;
    return ("000000" + num.toString(16)).slice(-6);
}
 
