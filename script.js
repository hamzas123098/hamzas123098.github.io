// Volledig unieke functie in kamer3.html om script.js conflicten te omzeilen
function verifieerEindCodeKamer3() {
    let codeInput = document.getElementById("code").value.trim();
    if (codeInput === "4182") {
        // We roepen de originele checkCode3 aan uit script.js voor de vette master-override prompt!
        if (typeof checkCode3 === "function") {
            checkCode3();
        } else {
            // Fallback voor als script.js niet laadt
            alert("🔓 MALWARE-FILTER GEACTIVEERD! Kamer 3 voltooid!");
            document.body.innerHTML = "<div style='text-align:center; margin-top:100px; color:#4ade80;'><h1>🎉 GEFELICITEERD AGENT!</h1></div>";
        }
    } else {
        pasTijdStrafToe();
        alert("🚨 FILTER GEWEIGERD! Ongeldige storingscode ingevoerd. Systeembeveiliging trekt 1 minuut van de klok af.");
    }
}