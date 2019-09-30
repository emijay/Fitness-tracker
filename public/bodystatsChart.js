
// Data has been passed over as an Object (currentStats)
var newArrayData = Object.values(currentStats)


let weightArr = [];
let fatpercentArr = [];
let dateArr = [];


for (let i = 0; i < (newArrayData.length - 3); i ++) {
    weightArr.push(newArrayData[i].weight)
    fatpercentArr.push(newArrayData[i].fatpercent)
    dateArr.push(newArrayData[i].to_char)
}


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: dateArr,
        datasets: [{
            label: 'Weight',
            backgroundColor: '#54A2E5',
            borderColor: '#54A2E5',
            data: weightArr,
            fill: false
        },
        {
            label: 'Fat Percentage',
            backgroundColor: '#ED6E85',
            borderColor: '#ED6E85',
            data: fatpercentArr,
            fill: false
        }


        ]
    },

    // Configuration options go here
    options: {}
});