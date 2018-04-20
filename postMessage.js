const writeSection = document.querySelector(".content--write")
const newForm = addDom("form")
newForm.id = "messageForm"
const newText = addDom("textarea")
newText.id = "newMessageArea"
newText.setAttribute("placeholder", "Enter new message here...")
newText.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault()
        addMessageToDB()
    }
}, false) 

const deleteButton = addDom("input")
deleteButton.setAttribute("type", "button")
deleteButton.setAttribute("value", "Delete All Messages")


newForm.appendChild(newText)
newForm.appendChild(deleteButton)
writeSection.appendChild(newForm)



function addMessageToDB () {
    if (document.querySelector("#newMessageArea").value) {  
        let existingData = []
        
        let startID
        let timestampTime = new Date(Date.now())
        if (localStorage.getItem("messageDB")) {
        existingData = JSON.parse(localStorage.getItem("messageDB"))
        startID = (existingData[existingData.length-1].id +1)
        } else {
            startID = 0
        }
        const newMessageObject = Object.create({}, {
            message: {
                enumerable: true,
                value: document.querySelector("#newMessageArea").value
            },
            timestamp: {
                value: timestampTime.toUTCString(),
                enumerable: true
            },
            user: {
                value: "test",
                enumerable: true
            },
            id: {
                value: startID,
                enumerable: true
            }
        })
        existingData.push(newMessageObject)
        localStorage.setItem("messageDB", JSON.stringify(existingData))
        document.querySelector("#newMessageArea").value = ""
    }
}
