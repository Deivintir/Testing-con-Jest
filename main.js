const Users = [
    {name: 'David', surname:'Rodríguez Terrón', dni: 75145610},
    {name: 'Pablo', surname:'Rodríguez Terrón', dni: 75145609},
    {name: 'Ana', surname:'Rodríguez Benjumea', dni: 75145611},
    {name: 'Alba', surname:'Rodríguez Benjumea', dni: 75145612},
    {name: 'Aroa', surname:'Rodríguez Benjumea', dni: 75145613}
];

const user = (dni) => {
    for (let i = 0; i < Users.length; i++) {
        if(Users[i].dni === dni){
            return Users[i];
        }
    }
    return 'No se encontraron coincidencias.';
}
module.exports = {user};