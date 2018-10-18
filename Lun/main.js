'use strict';
/*---------------------------------------
   FIELDSETS CHANGE             
-----------------------------------------*/

var step = 0;

$('#next-step').click(function () {
    if (step >= ($('fieldset').length) - 2) {
        $("#next-step").hide();
        $("#btn-finish").show();
    }
    var current = $('fieldset').eq(step);
    current.hide();
    var next = $('fieldset').eq(step + 1);
    next.show();
    step++;
    if (step >= 1) {
        $("#previous-step").removeAttr("disabled");
    }
});

$('#previous-step').click(function () {
    var current = $('fieldset').eq(step);
    var previous = $('fieldset').eq(step - 1);
    current.hide();
    previous.show();
    step--;
    if (step < 1) {
        $("#previous-step").attr("disabled", "true");
    } else if (step <= ($('fieldset').length) - 2) {
        $("#next-step").show();
        $("#btn-finish").hide();
    }
});

/*---------------------------------------
   JSON LOADING             
-----------------------------------------*/

(function () {
    var cities;
    var countries;

    $.getJSON("json/cities.json", function (data) {
        cities = data;
    });
    $.getJSON("json/countries.json", function (data) {
        countries = data;
    });

    $(document).ready(function (data) {
        var items = [];
        $.each(countries, function (key, value) {
            items.push("<option value='" + key + "'>" + value + "</option>");
        });

        $("#countries").append(items);
    });

    $('#countries').on('change', function () {
        var items = [];
        var selectCountry = this.value;
        $("#cities").empty();
        $.each(cities, function (key, value) {
            if (selectCountry == value.country) {
                items.push("<option value='" + key + "'>" + value.name + "</option>");
            }
        });

        $("#cities").append(items);
    })

}());

/*---------------------------------------
   STAFF             
-----------------------------------------*/

function changeSelect(sel) {
    sel.style.color = "#000";
};
/*--------------------------*/
$("input[name=url-fb]").css('visibility', 'hidden');
$("input[name=url-vk]").css('visibility', 'hidden');
$("input[name=url-tw]").css('visibility', 'hidden');
$("input[name=url-ok]").css('visibility', 'hidden');

$("#checkbox-fb").click(function () {
    if ($(this).is(":checked")) {
        $("input[name=url-fb]").css('visibility', 'visible');
    } else {
        $("input[name=url-fb]").css('visibility', 'hidden');
    }
});
$("#checkbox-vk").click(function () {
    if ($(this).is(":checked")) {
        $("input[name=url-vk]").css('visibility', 'visible');
    } else {
        $("input[name=url-vk]").css('visibility', 'hidden');
    }
});
$("#checkbox-tw").click(function () {
    if ($(this).is(":checked")) {
        $("input[name=url-tw]").css('visibility', 'visible');
    } else {
        $("input[name=url-tw]").css('visibility', 'hidden');
    }
});
$("#checkbox-ok").click(function () {
    if ($(this).is(":checked")) {
        $("input[name=url-ok]").css('visibility', 'visible');
    } else {
        $("input[name=url-ok]").css('visibility', 'hidden');
    }
});