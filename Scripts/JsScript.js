const CheckData=()=>{
    let person={
        FirstName:"Ajit",
        LastName:"Singh",
        Age:20,
        Address:"Bhubaneswar-293929",
        City:"Bhubaneswar",
        Country:"India"
    }

    const {FirstName:a,LastName:b,Age:ag,Country:c}=person;  // value saved in left side of prop 
                                                        // e.g. a,b,c

    const msg=document.querySelector("#divMsg");

    msg.innerHTML=`Value of a =${a} and Value of b =${b} and Age ag=${ag} and Value of c=${c} <br/><br/>`;

    // to make it more shorter we can write like this too.
    const msg2=document.querySelector("#divMsg2");
    const {FirstName,LastName,PinCode=2000,Age,City}=person;

    msg2.innerHTML=`<b>Value of FirstName =${FirstName} and Value of LastName =${LastName} and Age =${Age} and Value of City=${City} and PinCode =${PinCode} </b>`;

  // As PinCode variable is undefind or Property Not present in object then while printing 
  // it will show undefind. 

  // we can set defult value of pincode prop. if not present in the object.

 
}


const ReturnNull=()=>null;


const CheckNullReturn=()=>{

   // const {FirstName,LastName}=ReturnNull();

   // console.log(`FirstName : ${FirstName} and LastName : ${LastName}`); 
    // Show Error as can not Null Distructing 

    const {FName,LName}=ReturnNull() || {};
    console.log(`FirstName : ${FName} and LastName : ${LName}`); 

    // it will return undefind.

}


const CheckNestedObjectDistructuring=()=>{
    const employee={
        id:1001,
        name:{
            FirstName:"Pankaj",
            LastName:"Senapati"
        },
        Age:30,
        Gender:"Male"
    }

    // const {name:{
    //     FirstName,
    //     LastName
    // }}=employee;

     const msg=document.querySelector("#divMsg");

    //  msg.innerHTML=`First Name : ${FirstName} <br/> Last Name : ${LastName}`;


    // const {name:{
    //     FirstName:a,
    //     LastName:b
    // }}=employee;
    // msg.innerHTML=`First Name : ${a} <br/> Last Name : ${b}`;


    const {
        id,
        name:{
            FirstName,
            LastName
        },
        Gender
    }=employee;

     msg.innerHTML=`Id : ${id} <br/> First Name : ${FirstName} <br/> Last Name : ${LastName} <br/> Gender : ${Gender}`;
}