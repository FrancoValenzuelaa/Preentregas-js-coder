let interesFijo = 1.56

function calcularPrestamo(monto, meses, interes) {
    let cuota = (monto * interes) / meses
        for (let i = 1; i <= meses; i++) { //desgloce de cuotas
            console.log('Cuota ' + i + ' $ ' + cuota.toFixed(2))
        }
}

function simularPrestamo() {
    let monto = parseInt(prompt('Ingresa el monto del préstamo que necesitas:'))
    let totalCuotas = parseInt(prompt('Ingresa el total de cuotas a devolver: (máximo 36)'))

    if (monto > 0 && totalCuotas > 0) {
        calcularPrestamo(monto, totalCuotas, interesFijo)
    } else {
        console.error('Ingresa valores numéricos superiores a 0 (cero), tanto para el monto como también las cuotas.')
    }

}