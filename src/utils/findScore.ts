export function findScore(fields: any) {
    let score = 750
    if (fields.edad == "Hasta 30 años") {
        score -= 20
    } else if (fields.edad == "Entre 30 años y 50 años") {
        score -= 15
    } else if (fields.edad == "Mayor a 50 años") {
        score += 30
    }
    if (fields.civil == "Union Libre" || fields.civil == "Soltero") {
        score -= 10
    }
    if (fields.vivienda == "Familiar" || fields.vivienda == "Arriendo") {
        score -= 25
    } else {
        score += 25
    }
    if (fields.estudios == "Desconocido / Secundaria / Tecnica") {
        score -= 10
    } else {
        score += 15
    }
    if (fields.ingresos == "Hasta 2 smmlv") {
        score -= 10
    } else {
        score += 20
    }
    if (fields.genero == "Masculino" && fields.edad == "Hasta 30 años") {
        score -= 15
    }
    if (fields.genero == "Masculino" && fields.civil == "Soltero") {
        score -= 15
    }
    if ((fields.civil == "Casado" || fields.civil == "Union Libre") && fields.vivienda == "Familiar") {
        score -= 5
    }
    if (fields.vivienda == "Arriendo" && fields.antiguedad == "Hasta 4 años") {
        score -= 10
    }
    if (score > 800) {
        score += 35
    }
    return score
}