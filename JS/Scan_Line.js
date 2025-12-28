document.addEventListener("DOMContentLoaded", () => {

    const Scan_Line = document.querySelector(".Scan_Line")

    let Scan_Pos = 0

    setInterval(() => {
        Scan_Pos += 2
        if (Scan_Pos > 100) Scan_Pos = 0
        Scan_Line.style.top = `${Scan_Pos}%`
    }, 30)
})