const employee = { 
    name : undefined,
    streetAddress: undefined
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const temp = {...employee};
    delete temp[key];
    return temp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}