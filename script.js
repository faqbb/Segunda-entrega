
class Mascota {
 constructor(nombre, edad, raza, horas, dueño) {
    this.nombre = nombre
    this.edad = edad
    this.raza = raza 
    this.horas = parseFloat(horas)
    this.dueño = dueño
 }
}
const mascota1 = new Mascota("Paco", 3, "Bulldog", 8, "Jose Luis")
const mascota2 = new Mascota("Lucia", 5, "Golden", 12, "Maria")
const mascota3 = new Mascota("Milo", 1, "Caniche", 6, "Franco")
const mascota4 = new Mascota("Keyla", 2, "Dalmata", 4, "Carlos")
const mascota5= new Mascota("Nono", 7, "Silvestre", 3, "Maximo")
function total (horas) {
    if (horas => 8) {
        return horas * 100 + 200
    }
    else {
        return horas * 100
    }
}
const mascotas = [mascota1, mascota2, mascota3, mascota4, mascota5]

localStorage.setItem("mascotas", JSON.stringify(mascotas))
let transicionUser = document.getElementById('fila')
let transicionUserReg = document.getElementById('filaReg')
let loguearse = document.getElementById('login')
        loguearse.addEventListener('submit', (e) => {
            e.preventDefault()
            JSON.parse(localStorage.getItem("mascotas"))
            let nombreLog = document.getElementById('nameLog')
            let nombreMascotaLog = document.getElementById('petnameLog')
            let razaLog = document.getElementById('raceLog')
            let edadLog = document.getElementById('ageLog')
            let nombreLogVer = mascotas.filter((el) => el.dueño == `${nombreLog.value}`)
            let nombreMascotaLogVer = nombreLogVer.filter((el) => el.nombre == `${nombreMascotaLog.value}`)
            let razaLogVer = nombreMascotaLogVer.filter((el) => el.raza == `${razaLog.value}`)
            let edadLogVer = razaLogVer.filter((el) => el.edad == `${edadLog.value}`)
            console.log(edadLogVer)
                if (edadLogVer.length === 1) {
                    let usuarioFinal = edadLogVer[0]
                    transicionUser.innerHTML = `
                    <div class="alert alert-success mt-5 text-center" role="alert">
                        Bienvenido
                    </div>
                    <div>  
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${nombreLog.value}</h5>
                                <p class="card-text">${razaLog.value} llamado/a ${nombreMascotaLog.value} de ${edadLog.value} años</p>
                            </div>
                        </div>
                    </div>`
                    if (!(usuarioFinal.horas === 0 )) {
                        transicionUser.innerHTML = `
                    <div class="alert alert-success mt-5 text-center" role="alert">
                        Bienvenido
                    </div>
                    <div>  
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${nombreLog.value}</h5>
                                <p class="card-text">${razaLog.value} llamado/a ${nombreMascotaLog.value} de ${edadLog.value} años</p>
                            </div>
                        </div>
                    <div class="alert alert-secondary mt-5 text-center" role="alert">
                        Su mascota ha estado ${usuarioFinal.horas} horas, por lo que usted debe ${total(usuarioFinal.horas)} pesos
                    </div>
                    </div>`
                    }
                }
                else if (!(edadLogVer.length === 1)) {
                    transicionUser.innerHTML =
                    `<div class="alert alert-danger mt-5 text-center" role="alert">
                        Hubo un error con los datos, por favor verifíquelos.
                    </div>
                    <div class="text-center">
                        <input type="button" value="Actualizar la pagina"  class= "btn btn-secondary col-lg-4" onClick="document.location.reload(true)">
                    </div>`
                }               
            })
    
let registrarse = document.getElementById('register')

        registrarse.addEventListener('submit', (e) => {
            e.preventDefault()
            let nombre = document.getElementById('name')
            let nombreMascota = document.getElementById('petname')
            let raza = document.getElementById('race')
            let edad = document.getElementById('age')
            /*console.log(`${nombre.value} ${nombremascota.value} ${raza.value} ${edad.value}`)*/  
            if (nombre.value   == "" || nombreMascota.value  == "" || raza.value  == "" || edad.value  == "") {
                transicionUser.innerHTML =
                `<div class="alert alert-danger mt-5 text-center" role="alert">
                        Hubo un error con los datos, por favor verifíquelos.
                </div>
                <div class="text-center">
                    <input type="button" value="Actualizar la pagina"  class= "btn btn-secondary col-lg-4" onClick="document.location.reload(true)">
                </div>`
            }
            else { 
                    let mascota = new Mascota(`${nombreMascota.value}`, `${edad.value}`, `${raza.value}`,0,`${nombre.value}`)
                    mascotas.push(mascota)
                    localStorage.setItem("mascotas", JSON.stringify(mascotas))
                    transicionUserReg.innerHTML = `
                    <div class="alert alert-success mt-5 text-center" role="alert">
                        ¡Felicitaciones! logró registrarse con éxito.
                    </div>`
                }  
        })
            
