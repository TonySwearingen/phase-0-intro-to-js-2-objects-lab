let employee = {
    name: "name",
    address: "address"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, ...{[key]: value}}
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    
    return employee[key];
}