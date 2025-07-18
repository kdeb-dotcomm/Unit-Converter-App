let ButtonEl = document.getElementById("btn")
let inputEl = document.getElementById("numberType")
const conversionEl = document.querySelector(".conversion-result")
const conversionEl2 = document.getElementById("cv2")
const conversionEl3 = document.getElementById("cv3")
let useless = document.querySelector(".mini-container")

ButtonEl.addEventListener('click', function(){
    let number = inputEl.value
    if(number === "" ){
        alert("Type a number to convert")
        inputEl.value = ''
        return
    }else if(number < "0"){
        alert("Type a Positive Value")
        inputEl.value = ''
        return
    }

    conversionEl.innerHTML = `<span>${number}</span> meters =<span>${(number * 3.281).toFixed(3)}</span> feet | <span>${number}</span> feet = <span>${(number/3.281).toFixed(3)}</span> meters`
    conversionEl2.innerHTML = `<span>${number}</span> liters = <span>${(number * 0.264).toFixed(3)}</span> gallons | <span>${number}</span> gallons = <span>${(number/0.264).toFixed(3)}</span> liters`
    conversionEl3.innerHTML = `<span>${number}</span> kilos = <span>${(number * 2.204).toFixed(3)}</span> pounds | <span>${number}</span> pounds = <span>${(number/2.204).toFixed(3)}</span> kilos`
    inputEl.value = ''
    
}
)

inputEl.addEventListener('keypress', function(e){
    if (e.key === "Enter"){
        ButtonEl.click()
    }
})
useless.addEventListener('click', function(event) {
    // Check if the clicked element is NOT an input or button
    if (!event.target.closest('input') && (!event.target.closest('button')) && (inputEl.value !== "")) {
        ButtonEl.click(); // Trigger the convert button
    }
});