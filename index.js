let registartionForm = document.getElementById("partner-signup")
let formContainer = document.querySelector(".form-container")

registartionForm.addEventListener("submit", event => {
    event.preventDefault()

    let registrationData = new FormData (event.target)

    let partnerFullName = registrationData.get("fullname")

    let newHtmlContent = `
        <h2> Congradulation, ${partnerFullName}! </h2>
        <p>  You are on your way to finding your language partner and continuing your language learning journey. </p>
        <p> An email containg instruction on your next steps has been sent to you!</p>
    `

    formContainer.innerHTML = newHtmlContent

})