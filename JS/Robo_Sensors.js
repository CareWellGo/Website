document.addEventListener("DOMContentLoaded", () => {

    const Status_Badge = document.querySelector(".Status_Badge")
    const Btn_Primary = document.querySelector(".Btn_Primary")

    const Node_Temp = document.querySelector(".Node_Temp")
    const Node_Heart = document.querySelector(".Node_Heart")
    const Node_Sensors = document.querySelector(".Node_Sensors")

    let System_Online = true

    Btn_Primary.addEventListener("click", () => {
        System_Online = !System_Online

        Status_Badge.innerText = System_Online ? "● System Online" : "● System Offline"
        Status_Badge.style.color = System_Online ? "#00ff2a" : "#ff2929ff"
        Node_Sensors.innerText = System_Online ? "● Sensors : On" : "● Sensors : Off"
        Node_Sensors.style.color = System_Online ? "#00ff2a" : "#ff2929ff"
    })

    setInterval(() => {
        if (!System_Online) return

        Node_Temp.innerText = `Temp : ${(36 + Math.random()).toFixed(2)}°C`
        Node_Heart.innerText = `Heart : ${Math.floor(65 + Math.random() * 15)} BPM`
    }, 1500)

})