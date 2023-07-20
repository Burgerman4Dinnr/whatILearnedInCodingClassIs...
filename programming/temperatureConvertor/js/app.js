const submitBtn = document.getElementById('submitBtn')
let temp = [];

const collectInfo =()=> {
    const tempUnit = document.querySelector('select[name=temp]').value
    if(tempUnit == '') {
        alert('Give an empty input, get an "empty" response!')
    } else {
        let data = {
            tempUnit,
        }
        // addInfo(temp, data)
    }
    let data = {
        tempUnit,
    }
    convertTemp()
}
function convertTemp() {
    const exp = document.querySelector('select[name=temp]').value;
    const temp = document.getElementById('input').value
    let result = document.getElementById('result')
    let newTemp;
    switch(exp) {
        case 'Fahrenheit':
            newTemp = (temp - 32) * (5 / 9);
            result.innerText = `It is currently ${newTemp} degrees Fahrenheit`
            break;
        case 'Celsius':
            newTemp = (temp - 32) * (5 / 9);
            result.innerHTML = `It is currently ${newTemp} degrees Celsius`
            break;
        case 'Kelvin':
            newTemp = (temp - 32) * (5 / 9);
            result.innerHTML = `It is currently ${newTemp} degrees Kelvin`
            break;
        default:
            console.log('Global Warming');
            break;
    }
}



    
    submitBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        collectInfo();
    });