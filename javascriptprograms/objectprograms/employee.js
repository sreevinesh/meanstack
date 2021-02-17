//id name desig salary
var employee={
    id:10,
    name:"sangeeth",
    desig:"developer",
    salary:26000,
}

if("gender" in employee){
    console.log("exist");
}
else{
    employee["gender"]="male"
    console.log(employee.gender);
}
