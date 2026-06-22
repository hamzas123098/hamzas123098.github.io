// ==========================================================================
// CENTRALIZED ESCAPE ROOM JAVASCRIPT
// ==========================================================================

// Universele functie om hints te tonen en te verbergen binnen een puzzel-box
function toonHint(id, isFout) {
    let element = document.getElementById(id);
    if (!element) return;
    
    // Zoek de ouder-div (de puzzel-box) van het geklikte element
    let box = element.parentElement;
    
    // Verberg eerst alle hints binnen deze specifieke puzzel-box
    let hints = box.getElementsByClassName('hint');
    for (let i = 0; i < hints.length; i++) {
        hints[i].style.display = 'none';
    }
    
    // Toon de geselecteerde hint
    element.style.display = 'block';
}

// ==========================================================================
// KAMER DEUR CONTROLES
// ==========================================================================

// KAMER 1: Wachtwoordveiligheid (Naar Kamer 2)
function checkCode() {
    let code = document.getElementById("code").value.trim();

    if (code === "7294") {
        alert("🔓 Systeem hersteld! Toegang tot de serverruimte verleend. Je gaat nu naar Kamer 2.");
        window.location.href = "kamer2.html";
    } else {
        alert("🚨 TOEGANG GEWEIGERD: De ingevoerde cryptografische sleutel is incorrect. Probeer het opnieuw.");
    }
}

// KAMER 2: Cryptografie Lab (Naar Kamer 3)
function checkCode2() {
    let code = document.getElementById("code").value.trim();

    if (code === "5388") {
        alert("🔓 DECRYPTIE SUCCESVOL! Alle bestanden zijn leesbaar. Je gaat nu naar Kamer 3.");
        window.location.href = "kamer3.html";
    } else {
        alert("🚨 CRYPTO CORRUPTIE: De ingevoerde sleutel komt niet overeen met de checksum. Probeer het opnieuw.");
    }
}

// KAMER 3: Phishing & Social Engineering (Naar de Overwinning!)
function checkCode3() {
    let code = document.getElementById("code").value.trim();

    if (code === "4182") {
        // We verplaatsen de prompt-logica naar een strakke finale check
        let eindcode = prompt("🔴 CRUCIALE CODE VEREIST!\nVoer de master-override sleutel in om het virus definitief te vernietigen (Hint: Combineer de eerste cijfers van alle kamers: 7, 5, 4):");

        if (eindcode === "754") {
            alert("🎉 GEFELICITEERD! Het virus is volledig gewist en de school-firewall is weer online. Jullie hebben de missie voltooid!");
            window.location.href = "win.html"; // Zorg dat dit bestand (of gewonnen.html) bestaat!
        } else {
            alert("🚨 CORRUPTIE: Het virus weert de override af. Verkeerde master-override code.");
        }
    } else {
        alert("🚨 FILTER MISLUKT: De anti-phishing code is incorrect.");
    }
}