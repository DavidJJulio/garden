// 3. Devuelve un listado con el nombre, 
// apellidos y email de los empleados 
// cuyo jefe tiene un código de jefe igual a 7.

export const getInfoEmployeesByBoss = async() =>{
    let res = await fetch("http://localhost:5502/employees")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        if (val.code_boss == 7){
            let emailtemp = val.email.split('(')[0]
            emailtemp = emailtemp.replace('[', '')
            emailtemp = emailtemp.replace(']', '')
            result.push({
                name: val.name,
                lastname1: val.lastname1,
                lastname2: val.lastname2,
                email: emailtemp,
            })
        }
    })
    return result
}

// 4. Devuelve el nombre del puesto, 
// nombre, apellidos y email del jefe de la empresa.

export const getBoss = async() =>{
    let res = await fetch("http://localhost:5502/employees")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        if (val.code_boss == null) {
            let emailtemp = val.email.split('(')[0]
            emailtemp = emailtemp.replace('[', '')
            emailtemp = emailtemp.replace(']', '')
            result.push({
                name: val.name,
                lastname1: val.lastname1,
                lastname2: val.lastname2,
                email: emailtemp,
            })
        }
    })
    return result
}

// 5. Devuelve un listado con el nombre, apellidos y puesto de 
// aquellos empleados que no sean representantes de ventas.

export const getEmployeesDiff_from_SpecificPosition = async() =>{
    let res = await fetch("http://localhost:5502/employees")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        if(val.position != "Representante Ventas"){
            result.push({
                name: val.name,
                lastname1: val.lastname1,
                lastname2: val.lastname2,
                position: val.position,
            })
        }
    })
    return result
}

// MULTITABLA 1. Obtén un listado con el nombre de cada 
// cliente y el nombre y apellido de su representante de ventas.

import {
    getClientAndSellsAndEmployee
} from "./clients.js"

export const getEmployeeOfTheClient = async() =>{
    let res = await fetch("http://localhost:5502/employees")
    let res2 = await getClientAndSellsAndEmployee()
    let data = await res.json();
    let result = []
    data.forEach(val =>{
        res2.forEach(val2 =>{
            if(val2.code_employee_sales_manager == val.employee_code){
                result.push(val2)
            }
        })
    })
    return result
}