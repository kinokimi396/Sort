const prefSelect = document.getElementById('pref');
const container = document.getElementById('circle-container');

prefSelect.addEventListener('change',function() {
    container.innerHTML = ''; // Clear previous circles

    const selectedPref = prefSelect.value;
    let circleClass = '';


    if(selectedPref === 'tokyo') {
        colorClass='red';
    } else if(selectedPref === 'osaka') {
        colorClass='yellow';
    } else if(selectedPref === 'kyoto') {
        colorClass='green';
    }

    if(colorClass) {
        const circle = document.createElement('div');
        circle.classList.add('circle', colorClass);
        container.appendChild(circle);
    }
});