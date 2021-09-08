let registartionForm = document.getElementById("partner-signup")
let formContainer = document.querySelector(".form-container")

registartionForm.addEventListener("submit", event => {
    event.preventDefault()

    let registrationData = new FormData (event.target)

    let partnerFullName = registrationData.get("fullname")

    let newHtmlContent = `
        <div class="form-text">
            <h2> Congradulation, ${partnerFullName}! </h2> </br>
            <p>  You are on your way to finding your language partner and continuing your language learning journey. </p></br>
            <p> An email containg instruction on your next steps has been sent to you!</p>

        </div>
    `

    formContainer.innerHTML = newHtmlContent

})