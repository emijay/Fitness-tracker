
// Data has been passed over as an Object (currentMacros)
let carbs = currentMacros.carbs;
let protein = currentMacros.protein;
let fat = currentMacros.fat;


let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Carbs','Protein','Fats'],
        datasets: [{
            label: 'Macro Breakdown',
            backgroundColor: ['#F8CD6B','#54A2E5','#ED6E85'],
            borderColor: '#fff',
            data: [carbs, protein, fat]
        }]
    },

    // Configuration options go here
    options: {
    }
});