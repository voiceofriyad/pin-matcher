// Pin Generate html selector
const pinGenerateBtn = document.querySelector('.generate-btn');
const pinGeneratedField = document.getElementById('randomNum');
// Pin generate button event handler
pinGenerateBtn.addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * 9000 + 1000)
    pinGeneratedField.value = randomNumber;
})

// keypad html selector
const keypadBtn = document.querySelector('.calc-body');
const userInputField = document.getElementById('userInputField');
// keypad numbers event handler
keypadBtn.addEventListener('click', function (e) {
    const btn = e.target;
    if (btn.matches('.calcNumBtn') && userInputField.value.length < 4) {
        userInputField.value += btn.innerText;
    }
})

// clear button html selector
const clearBtn = document.getElementById('clear');
// clear button event handler
clearBtn.addEventListener('click', function () {
    userInputField.value = '';
})

//deleteBtn button event handler
const deleteBtnBtn = document.getElementById('deleteBtn');
deleteBtnBtn.addEventListener('click', function () {
    const currentValue = userInputField.value;
    if (currentValue > 0) {
        userInputField.value = userInputField.value.slice(0, -1);
    } else {
        alert('Number field is empty');
    }
})

// submit button html selector
const submitBtn = document.getElementById('submit-btn');
const success = document.querySelector('.success');
const wrong = document.querySelector('.wrong');
const leftNumber = document.getElementById('countLeft');
// submit button event handler
let LeftCount = parseInt(leftNumber.innerText);
let wrongCount = 0;

submitBtn.addEventListener('click', function () {
    const keypadNumber = userInputField.value;
    const pinGenerateNumber = pinGeneratedField.value;
    if (pinGenerateNumber == '' && keypadNumber == '') {
        alert('Please Generate Pin Number');
    }
    else if (keypadNumber === pinGenerateNumber) {
        success.style.display = 'block';
        setTimeOut(success);
    }
    else {
        wrongCount += 1;
        wrong.style.display = 'block';
        setTimeOut(wrong);
        if (keypadNumber !== pinGenerateNumber && LeftCount > 1) {
            LeftCount--;
            leftNumber.innerText = LeftCount;
            console.log(LeftCount);
        }
        else {
            document.querySelector('.action-left').style.display = 'none';
            submitBtn.disabled = true;
        }
    }
    userInputField.value = '';
    pinGeneratedField.value = '';
})


///  hide error or sucess message function
function setTimeOut(idName) {
    setTimeout(function () {
        idName.style.display = 'none';
    }, 3000);
}