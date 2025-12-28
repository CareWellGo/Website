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

window.onload = function() {
    console.log("Timer started... see you in 1 minute!");

    // Set timeout for 60,000ms (1 minute)
    setTimeout(() => {
        const alertBox = document.getElementById('purchaseAlert');
        
        // Make it visible
        alertBox.style.display = 'block';
        
        // The CSS animation 'slideIn' will trigger automatically now
    }, 60000); 
};

function closeAlert() {
    const alert = document.getElementById('purchaseAlert');
    alert.style.transition = "0.5s ease";
    alert.style.transform = "translateX(120%)"; 
    setTimeout(() => alert.remove(), 500);
}

function handlePurchase() {
    alert("Redirecting to Secure Payment Portal...");
}


// AI Diagnostic Chatbot Functionality
/**
 * CareWellGO - Core Intelligence & UI Controller
 */

class HealthcareAI {
    constructor() {
        // Initial Knowledge Base (Can be trained further)
        this.database = [
            { symptoms: ["hello", "hi","hyy"], diagnosis: "Enter Your Symptoms", cure: "Hello! How May I Help You." },
            { symptoms: ["fever", "cough", "cold"], diagnosis: "Influenza (Flu)", cure: "Rest, hydration, and 500mg Paracetamol." },
            { symptoms: ["chest pain", "shortness of breath"], diagnosis: "Acute Cardiac Distress", cure: "EMERGENCY: Administer Aspirin and call 911 immediately." },
            { symptoms: ["headache", "blurred vision"], diagnosis: "Migraine / Hypertension", cure: "Dark room rest and blood pressure monitoring." }
        ];
    }

    // "Train" function to add new data dynamically
    trainAI(symptomList, diagnosisName, cureMethod) {
        const entry = {
            symptoms: symptomList.map(s => s.toLowerCase().trim()),
            diagnosis: diagnosisName,
            cure: cureMethod
        };
        this.database.push(entry);
        console.log(`✅ AI Training Complete: ${diagnosisName} added to neural core.`);
    }

    // Diagnostic Logic: Finds the best match based on symptom overlap
    diagnose(input) {
        const query = input.toLowerCase();
        let report = { match: null, score: 0 };

        this.database.forEach(item => {
            let matches = item.symptoms.filter(s => query.includes(s)).length;
            let score = matches / item.symptoms.length;

            if (score > report.score) {
                report.score = score;
                report.match = item;
            }
        });
        return report;
    }
}

// Initialize AI and UI Elements
const roboAI = new HealthcareAI();
const chatDisplay = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

/**
 * Handle Diagnostic Interaction
 */
async function processAI() {
    const text = userInput.value.trim();
    if (!text) return;

    // Display User Message
    addMessage("Patient", text, 'user');
    userInput.value = "";

    // Simulate Robot "Processing"
    const typingIndicator = addMessage("CareWellGO", "Scanning vitals and cross-referencing database...", 'bot thinking');
    
    await new Promise(res => setTimeout(res, 1500)); // Artificial Delay
    typingIndicator.remove();

    const result = roboAI.diagnose(text);

    if (result.score > 0.3) {
        const accuracy = (result.score * 100).toFixed(1);
        const response = `
            <strong>DIAGNOSIS FOUND (${accuracy}% Match):</strong> ${result.match.diagnosis}<br>
            <strong>RECOMMENDED CURE:</strong> ${result.match.cure}
        `;
        addMessage("CareWellGO", response, 'bot success');
    } else {
        addMessage("CareWellGO", "Analysis inconclusive. Please provide more specific symptoms or contact a human specialist.", 'bot warning');
    }
}

/**
 * Helper to append messages to UI
 */
function addMessage(sender, text, type) {
    const div = document.createElement('div');
    div.className = `msg ${type}`;
    div.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatDisplay.appendChild(div);
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
    return div;
}

/**
 * Real-time Vitals Simulation (Updates the dashboard numbers)
 */
function simulateVitals() {
    const bpm = document.getElementById('heart-rate');
    const temp = document.getElementById('body-temp');

    if(bpm) bpm.innerText = (Math.floor(Math.random() * (85 - 70) + 70)) + " BPM";
    if(temp) temp.innerText = (Math.random() * (37.2 - 36.4) + 36.4).toFixed(1) + "°C";
}

setInterval(simulateVitals, 3000); // Update every 3 seconds

// Allow "Enter" key to send message
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") processAI();
});

/**
 * Example of Training via UI Console
 * Usage: trainSystem('sore throat, chills', 'Common Cold', 'Warm fluids and Vitamin C')
 */
window.trainSystem = (symptoms, diagnosis, cure) => {
    const list = symptoms.split(',');
    roboAI.trainAI(list, diagnosis, cure);
    addMessage("System", `Successfully trained on ${diagnosis}.`, 'bot system');
};
