var key = "Ws3tDk4glALBaPPPL7:X";
var token = btoa(key);
var count = 0;

async function contactDisplay() {
    const settings = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + `${token}`
        }
    };
    try {
        const fetchResponse = await fetch(`https://rajeshkumarthankaraja.freshdesk.com/api/v2/contacts`, settings);
        const data = await fetchResponse.json();
        var cnts = document.querySelector('.contacts');
        count = Object.keys(data).length;
        console.log(data);
        data.forEach((e) => {
            const cntsContainer = document.createElement("div");
            cntsContainer.className = "ticket-container";
            cntsContainer.innerHTML = `
            <p class="tkt-sub">Name: ${e.name}</p>
            <p class="tkt-pri">Email: ${e.email}</p>
            <p class="tkt-pri">Id: ${e.id}</p>`         
            cnts.append(cntsContainer);
            })
        } catch (e) {
                return e;
            }
};


contactDisplay();
