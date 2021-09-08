let registartionForm = document.getElementById("partner-signup")
let formContainer = document.querySelector(".form-container")
let homePage = document.getElementById("home")
let signUpPage = document.getElementById("signUp")


//Current page indicator 




homePage.addEventListener("click", function currentPage () {
    homePage.classList.add("current-page")

    
})

signUpPage.addEventListener("click", function currentPageS (e) {
    e.preventDefault()
    signUpPage.classList.add("current-page")
})



//Registration Form set up
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

