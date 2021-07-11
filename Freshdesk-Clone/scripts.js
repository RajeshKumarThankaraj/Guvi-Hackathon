// var listAPI = 'https://rajeshkumarthankaraja.freshdesk.com/api/v2/tickets';

var key = "Ws3tDk4glALBaPPPL7:X";
var token = btoa(key);


async function display() {
    const settings = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + `${token}`
        }
    };
    try {
        const fetchResponse = await fetch(`https://rajeshkumarthankaraja.freshdesk.com/api/v2/tickets`, settings);
        const data = await fetchResponse.json();
        var tkts = document.querySelector('.tickets');
        // tkts.innerHTML = 10;
        data.forEach((e) => {
        const tktContainer = document.createElement("div");
        tktContainer.className = "ticket-container";
        tktContainer.innerHTML = "Additionally, you have the opportunity to modify or replace HTML elements. Therefore, you should learn how the innerHTML JavaScript property can be used to your advantage.";
        tktContainer.innerHTML = `
            <p class="tkt-sub">${e.subject}</p>
            <p class="tkt-pri">Priority: ${e.priority} <span class="tkt-sts">Status: ${e.status}</span></p>
            <p class="tkt-pri"></p>`;
        tkts.append(tktContainer);
        });
    } catch (e) {
        return e;
    }
    var dashBrd = document.querySelector('.boards');
    const boardsDiv = document.createElement("div");
    boardsDiv.className = "board-container";
    count = Object.keys(data).length;
    boardsDiv.innerHTML = `<p class="tkt-opn">No. of Tickets: ${count}</p>`          
    dashBrd.append(boardsDiv);  
};


display();