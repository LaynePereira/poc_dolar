//validar se 6 meses ante do dia de hoje é > do que 01/03

$(function () {
    var dateFormat = "yy-mm-dd",
        from = $("#dateinitial")
            .datepicker({
                defaultDate: "dateNow",
                dateFormat: "yy-mm-dd",
                minDate: "-6m",
                maxDate: "-1d",
                changeMonth: true,
                numberOfMonths: 1
            })
            .on("change", function () {
                to.datepicker("option", "minDate", getDate(this));
                to.datepicker("option", "defaultDate", getDate(this));
                to.datepicker("option", "maxDate", subDate(this));
                to.datepicker("option", "enable", subDate(this));
                console.log(subDate(this));
            }),
        to = $("#datefinal")
            .datepicker({
                dateFormat: "yy-mm-dd",
                // minDate: "-1d",
                // maxDate: "-1d",
                changeMonth: true,
                numberOfMonths: 1
            })
            .on("change", function () {
                filterGlobal();
                table.draw();
            //     // from.datepicker("option", "maxDate", getDate(this));
            });


    //tira a diferença para travar os 60 dias a partir do dia selecionado
    function subDate(element) {
        var today = new Date();
        var date = new Date(element.value);
        var msDiff = today.getTime() - date.getTime();
        var days = msDiff / 1000 / 60 / 60 / 24;
        var diffDays = Math.floor(days) - 60;
        console.log(diffDays);
        if (diffDays > 0) {
            return -diffDays;
        } else {
            return -1;
        }

    };

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }
});

//filter date
// function filterGlobal () {
//     $('#example').DataTable().search(
//         $('#global_filter').val(),
//         $('#global_regex').prop('checked'),
//         $('#global_smart').prop('checked')
//     ).draw();
// }


//---transformar a string () em data.
//---var min = $('#dateinitial').val();
//---var max = $('#datefinal').val();
// ---pegar o newDate e usar a função getTime para fazer a comparação da data min e max com a data do Json


var dataSet = [
    ["2010-02-01T00:00:00","4.20"],
    ["2010-02-02T00:00:00", "4.30"],
    ["2010-02-03T00:00:00", "4.50"],
    ["2010-02-04T00:00:00", "4.69"],
    ["2010-02-05T00:00:00", "4.88"],
    ["2010-02-06T00:00:00", "4.99"],
];

$(document).ready(function () {
    table = $('#example').DataTable({
        data: dataSet,
        columns: [
            { title: "Data" },
            { title: "Cotação" },

        ]
    });
});

// Extensão dataTables search

// $.fn.dataTable.ext.search.push(
//     function (settings, data, dataIndex) {
//         var min = $('#dateinitial').val();
//         var max = $('#datefinal').val();
//         var createdAt = data[4] || 0; // coluna data na tabela

//         if (
//             (min == "" || max == "")
//             ||
//             (datepicker(createdAt).isSameOrAfter(min) && datepicker(createdAt).isSameOrBefore(max))
//         ) {
//             return true;
//         }
//         return false;
//     }
// );

//habilitar botão qdo data fim for selecionada
$("#btn").click(function({
    
}));

//oncloser