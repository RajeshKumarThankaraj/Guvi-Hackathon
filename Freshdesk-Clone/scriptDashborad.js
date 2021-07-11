// var listAPI = 'https://rajeshkumarthankaraja.freshdesk.com/api/v2/tickets';

var key = "Ws3tDk4glALBaPPPL7:X";
var token = btoa(key);
var count = 0;
var countCnts = 0;

async function Dashdisplay() {
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
        var dashBrd = document.querySelector('.boards');
        const boardsDiv = document.createElement("div");
        boardsDiv.className = "board-container";
        count = Object.keys(data).length;
        boardsDiv.innerHTML = `<p class="tkt-opn">No. of Tickets: ${count}</p>`          
        dashBrd.append(boardsDiv);
        }
    catch (e) {
        return e;
        }

    try {
        const fetchResponse = await fetch(`https://rajeshkumarthankaraja.freshdesk.com/api/v2/contacts`, settings);
        const data = await fetchResponse.json();
        var dashBrd1 = document.querySelector('.boards');
        const boardsDiv1 = document.createElement("div");
        boardsDiv1.className = "board-container";
        countCnts = Object.keys(data).length;
        boardsDiv1.innerHTML = `<p class="tkt-opn">No. of Contacts: ${countCnts}</p>`          
        dashBrd1.append(boardsDiv1);  
    } catch (e) {
        return e;
    }

    
};


Dashdisplay();