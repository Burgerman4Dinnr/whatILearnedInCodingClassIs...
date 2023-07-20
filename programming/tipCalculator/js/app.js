const submitBtn = document.getElementById('submitBtn')
let tip = [];

const collectInfo =()=> {
    const tips = document.querySelector('select[name=tip]').value
    if(tips == '') {
        alert('Please Fill Out Field!')
    } else {
        let data = {
            tips,
        }
        // addInfo(temp, data)
    }
    let data = {
        tips,
    }
    convertTip()
}

// var bill = document.querySelector('bill').value


function convertTip() {
    const exp = document.querySelector('select[name=tip]').value;
    const tip = document.getElementById('input').value
    let result = document.getElementById('result')
    let newTip;
    switch(exp) {
        case '0%':
            result.innerText = `You have been banned from eating at this restaurant! Goodbye.`
            break;
        case '10%':
            newTip = (tip + 0.01 );
            result.innerHTML = `Your total is, $${newTip}`
            break;
        case '15%':
            newTip = (tip + 0.015);
            result.innerHTML = `Your total is, $${newTip}`
            break;
            case '15%':
            newTip = (tip + 0.020);
            result.innerHTML = `Your total is, $${newTip}`
            break;
        default:
            console.log('Please select your tip option!');
            break;
    }
}



    
    submitBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        collectInfo();
    });