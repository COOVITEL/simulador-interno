import jsPDF from "jspdf";

export function downloadPDF(fields: any, score: number) {
    try {
        const doc = new jsPDF()

        // Cuadro Superior
        doc.roundedRect(10, 10, 190, 28, 2, 2)
        doc.line(10, 32, 200, 32)

        doc.addImage('images/logo.png', 'PNG', 11, -5, 50, 55)

        // Cuadro Centro
        doc.setFillColor(242, 242, 252)
        doc.setDrawColor(0, 0, 0)
        doc.roundedRect(29, 60, 152, 92, 2, 2, 'DF')
        doc.line(90, 60, 90, 152)

        // Fecha 
        doc.setFontSize(7)
        const now = new Date()
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const hour = String(now.getHours()).padStart(2, '0');
        const min = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        doc.setFont("helvetica", "bold");
        doc.text(`${day}/${month}/${year}  ${hour}:${min}:${seconds}`, 25, 16)
        doc.setFont("helvetica", "normal");

        doc.setFontSize(11)
        doc.line(65, 10, 65, 32)
        doc.setFont("helvetica", "bold");
        doc.text("FORMATO SIMULADOR INTERNO", 75, 23)
        doc.setFont("helvetica", "normal");
        doc.line(152, 10, 152, 32)

        doc.setFontSize(9)
        doc.setFont("helvetica", "bold");
        doc.text("PROCESO: GESTIÓN DE PRODUCTOS Y SERVICIOS", 65, 36)

        doc.setFontSize(9)
        doc.setFont("helvetica", "normal");
        doc.text("CÓDIGO: COV-GPS-FMT-006", 155, 15)
        doc.line(152, 16, 200, 16)
        doc.text("VERSIÓN: 1", 155, 20)
        doc.line(152, 21.5, 200, 21.5)
        doc.text("FECHA: Agosto 01 de 2024", 155, 25)
        doc.line(152, 26.5, 200, 26.5)
        doc.text("Página 1 de 1", 155, 30)

        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14)
        doc.text("Información Asociado", 80, 52)

        doc.setFontSize(12)
        doc.text("Nombre de Asociado", 32, 67.5)
        doc.line(29, 71, 181, 71)
        doc.text("Numero de Identificación", 32, 77.5)
        doc.line(29, 81, 181, 81)
        doc.text("Rango Edad", 32, 87.5)
        doc.line(29, 91, 181, 91)
        doc.text("Estado Civil", 32, 97.5)
        doc.line(29, 101, 181, 101)
        doc.text("Genero", 32, 107.5)
        doc.line(29, 111, 181, 111)
        doc.text("Tipo de Vivienda", 32, 117.5)
        doc.line(29, 121, 181, 121)
        doc.text("Nivel Academico", 32, 127.5)
        doc.line(29, 131, 181, 131)
        doc.text("Ingreso Mensual", 32, 137.5)
        doc.line(29, 141, 181, 141)
        doc.text("Antiguedad", 32, 147.5)


        doc.setFont("helvetica", "normal");
        doc.text(fields.name, 93, 67.5)
        doc.text(fields.cedula, 93, 77.5)
        doc.text(fields.edad, 93, 87.5)
        doc.text(fields.civil, 93, 97.5)
        doc.text(fields.genero, 93, 107.5)
        doc.text(fields.vivienda, 93, 117.5)
        doc.text(fields.estudios, 93, 127.5)
        doc.text(fields.ingresos, 93, 137.5)
        doc.text(fields.antiguedad, 93, 147.5)

        doc.setFillColor(242, 242, 252)
        doc.setDrawColor(0, 0, 0)
        doc.roundedRect(65, 170, 90, 20, 2, 2, 'DF')
        doc.line(110, 170, 110, 190)

        doc.setFontSize(14)
        doc.setFont("helvetica", "bold");
        doc.text("Score Interno", 71, 181)
        doc.setFontSize(16)
        doc.text(`${score}`, 127, 181)


        doc.save(`Simulacion-Score-Interno.pdf`)

    } catch (error) {
        console.log(error)
    }
}