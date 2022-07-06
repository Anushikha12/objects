//create a function
//Complete the function in the editor. In which you are given one object as a parameter, in that object, there is a data member named 
//name.. Your task is to create a method inside this object named setter , such that this method will print the value of the data member named as name.

function Check(obj1){
    obj1.setter=function(){
      console.log(obj1["name"]);
    }
 }

//Delete a property
//Complete the function in the editor. You have an object as a parameter. In which you have to delete the rollno property from the object and return the object.

function Check(obj1) {
    delete obj1.rollno;
   return "True";
}


//check whether the package is dream package or not
//Complete the function in the editor. In which you are given an object as a parameter.
//In that object, there is one property named as salary if the salary is maximum than 5 lakh then return "Dream" otherwise  return "NotDream".
 
function Check(obj1) {
    if(obj1["salary"]>500000){
      return "Dream";
    }
    else {
      return "NotDream"
    }
}

//check whether object has a parameter or not
//Complete the function in the editor. In which you are given an object as a parameter. You have to return "false" if there is no parameter in the object otherwise return "true".

function Check(obj1) {
    let count_keys=0;
    for(let i in obj1){
      count_keys++;
    }
    if(count_keys>0){
      return "true";
    }
    else {
      return "false";
    }
 }

//merge the objects
//Complete the function in the editor. In which you are given two objects as a parameter.In which you have to merge two objects and return a single object.

function Check(obj1,obj2) {
    let complete_obj=Object.assign(obj1,obj2);
    return complete_obj;
}

//object multiplier
//Complete the function in the editor. In which you are given an object and a digit N as a parameter.In the object there are two variable id and houseno are defined as a data member. You have to multiply both the data members with a given digit N.

function Check(a,obj1) {
    obj1["id"]=a*obj1["id"];
    obj1["houseno"]=a*obj1["houseno"];
    return obj1; 
}

//Find the sum of objects members

function Check(obj1) {
    let sum=0;
    for(let i in obj1){
      sum=sum+(obj1[i]);
    }
    return sum;
}

//check whether the objects are same or not
//Complete the function in the editor. In which you are given an object as a parameter. That object contains two variables name and id.
//Your task is to compare the object name and id to the new_name and new_id given there as a parameter.
//Return "true" if new_name and id are same as objects name and id otherwise return  "false".

function check(obj1,a,b) {
    if((obj1["name"]===a) && (obj1["id"]===b)){
      return "true";
    } 
    else {
      return "false";
    }
 }
 