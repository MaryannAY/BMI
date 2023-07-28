// Good Luck! You got this 💪🏾
// Write your code here.
function calculateBMI(weight, height) {
    return weight / (height * height)
}
const aliWeight = 90; 
const aliHeight = 1.9; 
const aliBMI = calculateBMI(aliWeight, aliHeight)

const mohamedWeight = 85
const mohamedHeight = 1.85
const mohamedBMI = calculateBMI(mohamedWeight, mohamedHeight);

if (aliBMI > mohamedBMI) {
    console.log("Ali's BMI is higher.")
} else if (aliBMI < mohamedBMI) {
    console.log("Mohamed's BMI is higher.")
} else {
    console.log("Ali's and Mohamed's BMI are the same.")
}