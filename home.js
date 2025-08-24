const validPin = 1234
// add money feature
document.getElementById("add-money-btn").addEventListener
    ("click", function (e) {
        e.preventDefault()
        const bank = document.getElementById("bank").value
        const accountNumber = document.getElementById("account-number").value
        const amount = parseInt(document.getElementById("add-amount").value)

        const pin = parseInt(document.getElementById("add-pin").value)



        const availableBalance = parseInt(document.getElementById("available-balance").innerText)

        if (accountNumber.length < 11) {
            alert("Please provide a valid account number")
            return;
        }
        if (pin !== validPin) {
            alert("Please provide valid pin number")
            return;
        }

        const totalNewAvailableBalance = amount + availableBalance

        document.getElementById('available-balance').innerText = totalNewAvailableBalance
    })


// cashout feature

document.getElementById("withdraw-money-btn").addEventListener("click", function (e) {
    e.preventDefault()

    const agentNumber = document.getElementById("agent-number").value
    const amount = parseInt(document.getElementById("withdraw-amount").value)
    const pin = parseInt(document.getElementById("cashout-pin").value)

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if (agentNumber.length < 11) {
        alert("Please provide a valid agent number")
        return;
    }
    if (pin !== validPin) {
        alert("Please provide a valid pin number")
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount
    document.getElementById("available-balance").innerText = totalNewAvailableBalance
}
)


// toggling feature 

document.getElementById("add-button").addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("transfer-money-parent").style.display = "none"
    document.getElementById("get-bonus-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"
    document.getElementById("transaction-history-parent").style.display = "none"

    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("transfer-money-parent").style.display = "none"
    document.getElementById("get-bonus-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"
    document.getElementById("transaction-history-parent").style.display = "none"

    document.getElementById("cash-out-parent").style.display = "block"
})

document.getElementById("transfer-money-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("get-bonus-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"
    document.getElementById("transaction-history-parent").style.display = "none"

    document.getElementById("transfer-money-parent").style.display = "block"
})

document.getElementById("get-bonus-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("transfer-money-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"
    document.getElementById("transaction-history-parent").style.display = "none"

    document.getElementById("get-bonus-parent").style.display = "block"
})

document.getElementById("pay-bill-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("transfer-money-parent").style.display = "none"
    document.getElementById("get-bonus-parent").style.display = "none"
    document.getElementById("transaction-history-parent").style.display = "none"

    document.getElementById("pay-bill-parent").style.display = "block"
})

document.getElementById("transaction-history-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("transfer-money-parent").style.display = "none"
    document.getElementById("get-bonus-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"

    document.getElementById("transaction-history-parent").style.display = "block"
})