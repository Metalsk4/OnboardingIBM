let retrive1 = localStorage.getItem('o3');
arrMyObj=JSON.parse(retrive1);
console.log(retrive1);
var tblbody = document.getElementsByTagName("table")[0];
var setIndexdata;

for(let i in arrMyObj)
{
    
    var row=document.createElement("tr");

    var cell2=document.createElement("td");
    var cellText2=document.createTextNode(arrMyObj[i].FirstName);
    cell2.appendChild(cellText2);
    row.appendChild(cell2);

    var cell3=document.createElement("td");
    var cellText3=document.createTextNode(arrMyObj[i].Lastname);
    cell3.appendChild(cellText3);
    row.appendChild(cell3);


    var cell4=document.createElement("td");
    var cellText4=document.createTextNode(arrMyObj[i].Phone);
    cell4.appendChild(cellText4);
    row.appendChild(cell4);

    var cell5=document.createElement("td");
    var cellText5=document.createTextNode(arrMyObj[i].Email);
    cell5.appendChild(cellText5);
    row.appendChild(cell5);

    var cell6=document.createElement("td");
    var cellText6=document.createTextNode(arrMyObj[i].EmployeeId);
    cell6.appendChild(cellText6);
    row.appendChild(cell6);

    var cell7=document.createElement("td");
    var cellText7=document.createTextNode(arrMyObj[i].DateofJoining);
    cell7.appendChild(cellText7);
    row.appendChild(cell7);

    var cell8=document.createElement("td");
    var cellText8=document.createTextNode(arrMyObj[i].PreviousLocation);
    cell8.appendChild(cellText8);
    row.appendChild(cell8);

    

   //data-toggle="modal" data-target="#myModal"
    var cell9=document.createElement("td");
    var cellBtn1=document.createElement("button");
    cellBtn1.setAttribute("type","button");
    cellBtn1.setAttribute("class","btn btn-primary");    
    cellBtn1.setAttribute(`onclick`,`EditUserData(${i})`);
    cellBtn1.setAttribute("data-toggle","modal");
    cellBtn1.setAttribute("data-target","#myModal");
    var bntText1=document.createTextNode("Edit");
    cellBtn1.appendChild(bntText1);
    cell9.appendChild(cellBtn1);
    row.appendChild(cell9);

    var cell10=document.createElement("td");
    var cellBtn2=document.createElement("button");
    cellBtn2.setAttribute("type","button");
    cellBtn2.setAttribute("class","btn btn-danger");
    cellBtn2.setAttribute(`onclick`,`DeleteformData(${i})`);
    var bntText2=document.createTextNode("Delete");
    cellBtn2.appendChild(bntText2);
    cell10.appendChild(cellBtn2);
    row.appendChild(cell10);

    tblbody.appendChild(row);
  
    
}
function DeleteformData(indexNo)
{
   arrMyObj.splice(indexNo,1);
   localStorage.setItem('o3',JSON.stringify(arrMyObj));
   window.location = "RegistrationSuccessFull.html";
}

function EditUserData(indexNo)
{

            document.getElementById('FName').value=arrMyObj[indexNo].FirstName;
            document.getElementById('LName').value=arrMyObj[indexNo].Lastname;
            document.getElementById('Phone').value=arrMyObj[indexNo].Phone;
            document.getElementById('Email').value=arrMyObj[indexNo].Email;
            document.getElementById('UID').value=arrMyObj[indexNo].EmployeeId;
            document.getElementById('DOJ').value=arrMyObj[indexNo].DateofJoining;
            document.getElementById('selPLoc').value=arrMyObj[indexNo].PreviousLocation;
            setIndexdata=indexNo;            
}

function SaveEditeddata()
{

    var fName=document.getElementById('FName').value;
    var LName=document.getElementById('LName').value;
    var phone=document.getElementById('Phone').value;
    var email=document.getElementById('Email').value;
    var EID=document.getElementById('UID').value;
    var doj=document.getElementById('DOJ').value;
    var prevLocation=document.getElementById('selPLoc').value;


            
    if(LName=="")           
        document.getElementById('lNameErr').style.display='block';
 
    if(phone=="")           
        document.getElementById('phoneErr').style.display='block';
  
    if(doj=="")            
        document.getElementById('DoJErr').style.display='block';
            
    if(prevLocation=="")           
        document.getElementById('selPrevErr').style.display='block';

    if(LName=="" || phone=="" || doj=="" || prevLocation=="")
    {
        document.getElementById('errAreaModal').innerHTML="Fields cannot be empty";
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
    {
        document.getElementById('emailErr').style.display='block';
        document.getElementById('emailErr').innerHTML='Invalid Email';
    }
    else{
            var myObj ={
            FirstName:fName,
            Lastname:LName,
            Phone:phone,
            Email:email,
            EmployeeId:EID,
            DateofJoining:doj,
            PreviousLocation:prevLocation 
           };
        arrMyObj[setIndexdata]=myObj;
        localStorage.setItem('o3',JSON.stringify(arrMyObj));
        window.location = "UpdationSuccessFull.html";
    }
    
}