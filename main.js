          function getFormData()
          {
            var fName=document.getElementById('FName').value;
            var LName=document.getElementById('LName').value;
            var phone=document.getElementById('Phone').value;
            var email=document.getElementById('Email').value;
            var EID=document.getElementById('UID').value;
            var doj=document.getElementById('DOJ').value;
            var prevLocation=document.getElementById('selPLoc').value;

            if(fName=="")            
              document.getElementById('fNameErr').style.display='block';
            
            if(LName=="")           
              document.getElementById('lNameErr').style.display='block';
            
            if(email=="")           
              document.getElementById('emailErr').style.display='block';
            
            if(phone=="")           
              document.getElementById('phoneErr').style.display='block';
            
            if(EID=="")            
              document.getElementById('eidErr').style.display='block';
            
            if(doj=="")            
              document.getElementById('DoJErr').style.display='block';
            
            if(prevLocation=="")           
              document.getElementById('selPrevErr').style.display='block';
            

            if(fName=="" || LName=="" || phone=="" || email=="" || EID=="" || doj=="" || prevLocation=="")
            {
        
              document.getElementById('ErrorArea').innerHTML="Fields cannot be empty";              
              return false;
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
 
               var arrMyObj = new Array();
               if(localStorage.getItem('o3'))
               {
                   let retrive = localStorage.getItem('o3');
                   arrMyObj=JSON.parse(retrive);
                   arrMyObj.push(myObj);
                   localStorage.setItem('o3',JSON.stringify(arrMyObj));
                   window.location = "RegistrationSuccessFull.html";

                  
               }
               else{                 
                 arrMyObj.push(myObj);                
                 localStorage.setItem('o3',JSON.stringify(arrMyObj));
                 window.location = "RegistrationSuccessFull.html";
               }
            }
            // console.log(fName+" "+LName+" "+phone+" "+email+" "+EID+" "+" "+doj+" "+prevLocation);
          }




          