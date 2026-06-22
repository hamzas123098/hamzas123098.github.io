function checkCode2() {

    let code = document.getElementById("code").value;

    if(code === "483") {

        alert("Correct! Kamer 3 wordt geopend.");

        window.location.href = "kamer3.html";

    } else {

        alert("Verkeerde code.");

    }
}

function checkCode3() {

    let code = document.getElementById("code").value;

    if(code === "516") {

        let eindcode = prompt(
            "Laatste uitdaging! Wat is de eindcode?"
        );

        if(eindcode === "936") {

            window.location.href = "gewonnen.html";

        } else {

            alert("Verkeerde eindcode.");

        }

    } else {

        alert("Verkeerde code.");

    }
}