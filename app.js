//validar se 6 meses ante do dia de hoje é > do que 01/03

$(function () {
    var dateFormat = "mm/dd/yy",
        from = $("#dateinitial")
            .datepicker({
                defaultDate: "dateNow",
                minDate: "-6m",
                maxDate: "-1d",
                changeMonth: true,
                numberOfMonths: 1
            })
            .on("change", function () {
                to.datepicker("option", "minDate", getDate(this));
                to.datepicker("option", "defaultDate", getDate(this));
                to.datepicker("option", "maxDate", subDate(this));
                console.log(subDate(this));
            }),
        to = $("#datefinal")
            .datepicker({
                // minDate: "-1d",
                // maxDate: "-1d",
                changeMonth: true,
                numberOfMonths: 1
            })
            // .on("change", function () {
            //     filterGlobal();
            //     // table.draw();
            //     // from.datepicker("option", "maxDate", getDate(this));
            // });


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
    ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "04/25/19", "$320,800"],
    ["Garrett Winters", "Accountant", "Tokyo", "8422", "05/26/19", "$170,750"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "06/27/19", "$86,000"],
    ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "07/28/19", "$433,060"],
    ["Airi Satou", "Accountant", "Tokyo", "5407", "08/29/19", "$162,700"],
    ["Brielle Williamson", "Integration Specialist", "New York", "4804", "09/30/19", "$372,000"],
    ["Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "10/01/19", "$137,500"],
    ["Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "11/02/19", "$327,900"],
    ["Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "12/03/19", "$205,500"],
    ["Sonya Frost", "Software Engineer", "Edinburgh", "1667", "01/04/20", "$103,600"],
    ["Jena Gaines", "Office Manager", "London", "3814", "02/05/20", "$90,560"],
    ["Quinn Flynn", "Support Lead", "Edinburgh", "9497", "03/06/20", "$342,000"],
    ["Charde Marshall", "Regional Director", "San Francisco", "6741", "04/07/20", "$470,600"],
    ["Haley Kennedy", "Senior Marketing Designer", "London", "3597", "05/08/20", "$313,500"],
    ["Tatyana Fitzpatrick", "Regional Director", "London", "1965", "06/09/20", "$385,750"],
    ["Michael Silva", "Marketing Designer", "London", "1581", "07/10/20", "$198,500"],
    ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "08/11/20", "$725,000"],
    ["Gloria Little", "Systems Administrator", "New York", "1721", "09/12/20", "$237,500"],
    ["Bradley Greer", "Software Engineer", "London", "2558", "10/13/20", "$132,000"],
    ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "11/14/20", "$217,500"],
    ["Jenette Caldwell", "Development Lead", "New York", "1937", "12/15/20", "$345,000"],
    ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "08/16/19", "$675,000"],
    ["Caesar Vance", "Pre-Sales Support", "New York", "8330", "09/17/19", "$106,450"],
    ["Doris Wilder", "Sales Assistant", "Sydney", "3023", "10/18/19", "$85,600"],
    ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "11/19/19", "$1,200,000"],
    ["Gavin Joyce", "Developer", "Edinburgh", "8822", "12/20/19", "$92,575"],
    ["Jennifer Chang", "Regional Director", "Singapore", "9239", "01/21/20", "$357,650"],
    ["Brenden Wagner", "Software Engineer", "San Francisco", "1314", "02/22/20", "$206,850"],
    ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "03/23/20", "$850,000"],
    ["Shou Itou", "Regional Marketing", "Tokyo", "8899", "04/24/20", "$163,000"],
    ["Michelle House", "Integration Specialist", "Sydney", "2769", "05/25/20", "$95,400"],
    ["Suki Burks", "Developer", "London", "6832", "06/26/20", "$114,500"],
    ["Prescott Bartlett", "Technical Author", "London", "3606", "07/27/20", "$145,000"],
    ["Gavin Cortez", "Team Leader", "San Francisco", "2860", "08/28/20", "$235,500"],
    ["Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "09/29/20", "$324,050"],
    ["Unity Butler", "Marketing Designer", "San Francisco", "5384", "10/30/20", "$85,675"]
];

$(document).ready(function () {
    table = $('#example').DataTable({
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Position" },
            { title: "Office" },
            { title: "Extn." },
            { title: "Start date" },
            { title: "Salary" }
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