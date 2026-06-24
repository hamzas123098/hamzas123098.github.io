// ==========================================================================
// UNIVERSELE ESCAPE ROOM TIMER (30 MINUTEN MAX)
// ==========================================================================
document.addEventListener("DOMContentLoaded", function() {
    let opgeslagenTijd = localStorage.getItem("escape_timer");
    let resterendeTijd;

    // Start nu standaard op 30 minutes (30 * 60 = 1800 seconden)
    if (!opgeslagenTijd || isNaN(parseInt(opgeslagenTijd))) {
        resterendeTijd = 30 * 60; 
        localStorage.setItem("escape_timer", resterendeTijd);
    } else {
        resterendeTijd = parseInt(opgeslagenTijd);
    }

    // Update de timer elke seconde
    let timerInterval = setInterval(function() {
        // Haal telkens de actuele tijd op (zodat strafminuten uit html-bestanden direct worden ingeladen!)
        resterendeTijd = parseInt(localStorage.getItem("escape_timer")) || 0;

        if (resterendeTijd > 0) {
            resterendeTijd--;
            localStorage.setItem("escape_timer", resterendeTijd);
            
            let minuten = Math.floor(resterendeTijd / 60);
            let seconden = resterendeTijd % 60;
            
            if (seconden < 10) seconden = "0" + seconden;
            if (minuten < 10) minuten = "0" + minuten;

            let timerElement = document.getElementById("timer-display");
            if (timerElement) {
                timerElement.innerText = "⏱️ Tijd over: " + minuten + ":" + seconden;
            }
        } else {
            clearInterval(timerInterval);
            alert("🚨 DE TIJD IS OP! Het virus van Blackout heeft Nexora Systems volledig overgenomen. Je hebt verloren...");
            localStorage.removeItem("escape_timer");
            window.location.href = "index.html"; 
        }
    }, 1000);
});

// ==========================================================================
// CENTRALIZED ESCAPE ROOM LOGICA
// ==========================================================================
function toonHint(id, isFout) {
    let element = document.getElementById(id);
    if (!element) return;
    
    let box = element.parentElement;
    let hints = box.getElementsByClassName('hint');
    for (let i = 0; i < hints.length; i++) {
        hints[i].style.display = 'none';
    }
    
    element.style.display = 'block';
}

function checkCode() {
    let code = document.getElementById("code").value.trim();
    if (code === "7294") {
        alert("🔓 Systeem hersteld! Toegang tot de serverruimte van Nexora Systems verleend. Je gaat nu naar Kamer 2.");
        window.location.href = "kamer2.html";
    } else {
        alert("🚨 TOEGANG GEWEIGERD: De ingevoerde cryptografische sleutel is incorrect. Probeer het opnieuw.");
    }
}

function checkCode2() {
    let code = document.getElementById("code").value.trim();
    if (code === "5136") { // Gecorrigeerd naar de nieuwe 4-cijferige code voor Kamer 2
        alert("🔓 DECRYPTIE SUCCESVOL! Alle bestanden zijn leesbaar. Je gaat nu naar Kamer 3.");
        window.location.href = "kamer3.html";
    } else {
        alert("🚨 CRYPTO CORRUPTIE: De ingevoerde sleutel komt nu niet overeen met de checksum. Probeer het opnieuw.");
    }
}

function checkCode3() {
    let code = document.getElementById("code").value.trim();
    if (code === "4182") {
        let eindcode = prompt("🔴 CRUCIALE CODE VEREIST!\nVoer de master-override sleutel in om het virus definitief te vernietigen (Hint: Combineer de eerste cijfers van alle kamers: 7, 5, 4):");
        if (eindcode === "754") {
            alert("🎉 GEFELICITEERD ONDERZOEKERS!\n\nHet anti-phishing filter is actief, de systemen van Nexora Systems starten op en de malware van Blackout is vernietigd! \n\nBij het herstarten van de server hebben jullie de insider ontmaskerd: de hoofd-systeembeheerder heeft de logs gewist en bleek de verrader te zijn! De autoriteiten zijn onderweg. Jullie hebben Project Blackout succesvol opgelost!");
            localStorage.removeItem("escape_timer"); 
            window.location.href = "gewonnen.html"; 
        } else {
            alert("🚨 CORRUPTIE: Het virus weert de override af. Verkeerde master-override code.");
        }
    } else {
        alert("🚨 FILTER MISLUKT: De anti-phishing code is incorrect.");
    }
}