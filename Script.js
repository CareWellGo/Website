document.addEventListener("DOMContentLoaded", () => {

    const Status_Badge = document.querySelector(".Status_Badge")
    const Btn_Primary = document.querySelector(".Btn_Primary")
    const Btn_Secondary = document.querySelector(".Btn_Secondary")

    const Node_1 = document.querySelector(".Node_Temp")
    const Node_2 = document.querySelector(".Node_Heart")
    const Node_3 = document.querySelector(".Node_Sensors")

    const Scan_Line = document.querySelector(".Scan_Line")
    const Stats = document.querySelectorAll(".Stat h3")

    let System_Online = true
    let Scan_Pos = 0

    Btn_Primary.addEventListener("click", () => {
        System_Online = !System_Online

        Status_Badge.innerText = System_Online ? "● System Online" : "● System Offline"
        Status_Badge.style.color = System_Online ? "#00ff2a" : "#ff2929ff"
        Node_3.innerText = System_Online ? "● Sensors : On" : "● Sensors : Off"
        Node_3.style.color = System_Online ? "#00ff2a" : "#ff2929ff"
    })

    setInterval(() => {
        if (!System_Online) return

        Node_1.innerText = `Temp : ${(36 + Math.random()).toFixed(2)}°C`
        Node_2.innerText = `Heart : ${Math.floor(65 + Math.random() * 15)} BPM`
    }, 1500)

    setInterval(() => {
        Scan_Pos += 2
        if (Scan_Pos > 100) Scan_Pos = 0
        Scan_Line.style.top = `${Scan_Pos}%`
    }, 30)

    Stats.forEach(Stat => {
        let Target = Stat.innerText
        let Count = 0

        if (Target.includes("%")) {
            let End = parseFloat(Target)
            let Int = setInterval(() => {
                Count += 0.4
                Stat.innerText = Count.toFixed(1) + "%"
                if (Count >= End) {
                    Stat.innerText = Target
                    clearInterval(Int)
                }
            }, 10)
        }

        if (Target === "24/7") {
            Stat.innerText = "0/7"
            let Num = 0
            let Int = setInterval(() => {
                Num++
                Stat.innerText = `${Num}/7`
                if (Num === 24) {
                    Stat.innerText = "24/7"
                    clearInterval(Int)
                }
            }, 40)
        }
    })

    Btn_Secondary.addEventListener("click", () => {
        alert("AI Diagnostic Engine Running\nVitals Stable\nAll Sensors Online")
    })

})
