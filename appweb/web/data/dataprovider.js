var usuarios = require('./usuarios.json');
var peliculas = require('./peliculas.json');

function getAllPeliculas(){
    return peliculas;
}

function getPeliculaById(id){
    const item = peliculas.filter( (a) => {return(a.id==id)});
    return item[0];
}

function validateUser(email,password){
    let u = usuarios.filter(
        (u)=>{
            return( (u.email==email) && (u.password==password) )
        }
    )
    if(u.length>0)
        return u[0]
    else
        return null
}

module.exports = {
    validateUser,
    getPeliculaById,
    getAllPeliculas
}