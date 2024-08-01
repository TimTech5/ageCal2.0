/*const dateInput = document.getElementById("date_of_birth");
const calBtn = document.getElementById("calculate-btn");
const resultArea = document.getElementById("result");
const userGender = document.getElementById("gender");

calBtn.addEventListener("click", function() {
    const dob = new Date(dateInput.value);
    const ageInMilliseconds = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMilliseconds);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    function displayGender() {
        const selectedValue = userGender.value;
        return selectedValue ? selectedValue : 'Not specified';
    }

    resultArea.innerHTML = `Hello ${displayGender()}, you are ${age} years old.`;
});

*/


const dateInput = document.getElementById("date_of_birth");
const calBtn = document.getElementById("calculate-btn");
const resultArea = document.getElementById("result");
const userGender = document.getElementById("gender");

calBtn.addEventListener("click", function() {
    const dob = new Date(dateInput.value);
    const ageInMilliseconds = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMilliseconds);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    function getGenderGreeting() {
        const selectedValue = userGender.value;
        if (selectedValue === 'Male') {
            return 'Sir';
        } else if (selectedValue === 'Female') {
            return 'Ma';
        } else {
            return 'there';
        }
    }

    resultArea.innerHTML = `Hello ${getGenderGreeting()}, you are ${age} years old.`;
});
