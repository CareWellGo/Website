document.addEventListener("DOMContentLoaded", () => {

    const Stats = document.querySelectorAll(".Stat h3")

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
})