function fun() {
    let ename = document.getElementById("ename").value;
    let acc = document.getElementById("acc").value;
    let cin = document.getElementById("cin").value;
    let cout = document.getElementById("cout").value;
  
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    table.appendChild(tr);
  
    let td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = ename;
  
    let td1 = document.createElement("td");
    tr.appendChild(td1);
    td1.textContent = acc;
  
    let td2 = document.createElement("td");
    tr.appendChild(td2);
    td2.textContent = cin;
  
    let td3 = document.createElement("td");
    tr.appendChild(td3);
    td3.textContent = cout;
  }