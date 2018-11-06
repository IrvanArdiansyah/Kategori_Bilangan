
var nampung = [];
var nampung1 = [];
function bilangan(x) {
    if (x>=0 || x<0) {
        nampung.push('Bulat')
    } if (x >= 0) {
        nampung.push('Cacah')
    } if (x < 0) {
        nampung.push('Negatif')
    } if (x == 0) {
        nampung.push('Nol')
    } if (x > 0) {
        nampung.push('Asli')
    } if (x % 2 !== 0) {
        nampung.push('Ganjil')
    } if (x % 2 == 0) {
        nampung.push('Genap')
    }
    for(i=1; i<=x; i++){
        if (x%i==0) {
            nampung1.push(i)
        } if (nampung1.length[i] == 1) {
            nampung.push('Prima')
        }
    }
    if (nampung1.length !== 2) {
        nampung.push('Komposit')
    }
return nampung
}

console.log(bilangan(14))

