const validPin = 1234

// function to get input values
function getInputValueNumber(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber
}

// get input value
function getInputValue(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

// function to get innertext
function getInnerText(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)

    return elementValueNumber
}

// function to set innertext
function setInnerText(value) {
    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value
}

// function to toggle
function handleToggle(id) {
    const forms = document.getElementsByClassName("form")
    for (const form of forms) {
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}

// function to toggle button
function handleButtonToggle(id) {
    const formBtns = document.getElementsByClassName("form-btn")
    for (const btn of formBtns) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
}


// add money feature
document.getElementById("add-money-btn").addEventListener
    ("click", function (e) {
        e.preventDefault()
        const bank = getInputValue("bank")
        const accountNumber = document.getElementById("account-number").value
        const amount = getInputValueNumber("add-amount")

        const pin = getInputValueNumber("add-pin")


        const availableBalance = getInnerText("available-balance")

        if (accountNumber.length < 11) {
            alert("Please provide a valid account number")
            return;
        }
        if (pin !== validPin) {
            alert("Please provide valid pin number")
            return;
        }

        const totalNewAvailableBalance = amount + availableBalance

        setInnerText(totalNewAvailableBalance)
    })


// cashout feature

document.getElementById("withdraw-money-btn").addEventListener("click", function (e) {
    e.preventDefault()

    const agentNumber = document.getElementById("agent-number").value
    const amount = getInputValueNumber("withdraw-amount")
    const pin = getInputValueNumber("cashout-pin")

    const availableBalance = getInnerText("available-balance")

    if (agentNumber.length < 11) {
        alert("Please provide a valid agent number")
        return;
    }
    if (pin !== validPin) {
        alert("Please provide a valid pin number")
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount
    setInnerText(totalNewAvailableBalance)
}
)


// toggling feature 

document.getElementById("add-button").addEventListener("click", function () {
    handleToggle("add-money-parent")

    handleButtonToggle("add-button")
})

document.getElementById("cash-out-button").addEventListener("click", function () {
    handleToggle("cash-out-parent")

    handleButtonToggle("cash-out-button")
})

document.getElementById("transfer-money-button").addEventListener("click", function () {
    handleToggle("transfer-money-parent")

    handleButtonToggle("transfer-money-button")
})

document.getElementById("get-bonus-button").addEventListener("click", function () {
    handleToggle("get-bonus-parent")

    handleButtonToggle("get-bonus-button")
})

document.getElementById("pay-bill-button").addEventListener("click", function () {
    handleToggle("pay-bill-parent")

    handleButtonToggle("pay-bill-button")
})

document.getElementById("transaction-history-button").addEventListener("click", function () {
    handleToggle("transaction-history-parent")

    handleButtonToggle("transaction-history-button")
})