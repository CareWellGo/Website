let Ai_Status = true

const Send_Btn = document.getElementById("Send_Btn")
const Power_Btn = document.getElementById("Power_Btn")
const Bot_Status = document.getElementById("Bot_Status")

Send_Btn.addEventListener("click", Process_Message)

document.getElementById("User_Input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        Process_Message()
    }
})

Power_Btn.addEventListener("click", Toggle_Ai_Power)

function Toggle_Ai_Power() {
    Ai_Status = !Ai_Status

    if (Ai_Status) {
        Bot_Status.innerText = "● AI ONLINE"
        Bot_Status.classList.remove("Bot_Status_Off")
        Power_Btn.className = "Btn_Power_On"
        Power_Btn.innerText = "POWER"
        Show_Bot_Message("System Booted Successfully")
    } else {
        Bot_Status.innerText = "● AI OFFLINE"
        Bot_Status.classList.add("Bot_Status_Off")
        Power_Btn.className = "Btn_Power_Off"
        Power_Btn.innerText = "OFF"
        Show_Bot_Message("System Shutdown Initiated")
    }
}

function Process_Message() {
    if (!Ai_Status) return

    const User_Text = Get_User_Input()
    if (User_Text === "") return

    Show_User_Message(User_Text)
    Clear_User_Input()

    setTimeout(() => {
        Show_Bot_Message(Generate_Bot_Response(User_Text))
    }, 500)
}

function Generate_Bot_Response(Text) {
    const Msg = Text.toLowerCase()

    if (Msg.includes("hello")) return "Hello I Am CareWellGO Assistant"
    if (Msg.includes("status")) return "All Systems Are Operational"
    if (Msg.includes("help")) return "I Am Here To Assist You"

    return "Command Received Processing"
}