var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Carbs','Protein','Fats'],
        datasets: [{
            label: 'Macro Breakdown',
            backgroundColor: ['#F8CD6B','#54A2E5','#ED6E85'],
            borderColor: '#fff',
            data: [10, 20, 30]
        }]
    },

    // Configuration options go here
    options: {
    }
});