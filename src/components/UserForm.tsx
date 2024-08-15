import React, { useState } from "react";
import { downloadPDF } from "../utils/downloadPdf";
import Antiguedad from "./form/Antiguedad";
import EstadoCivil from "./form/EstadoCivil";
import Estudios from "./form/Estudios";
import Genero from "./form/Genero";
import Id from "./form/Id";
import Name from "./form/name";
import RangoEdad from "./form/RangoEdad";
import Vivienda from "./form/Vivienda";
import Ingresos from "./form/Ingresos";
import { findScore } from "../utils/findScore";

export default function UserForm() {
    const [control, setControl] = useState(false);

    const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        setControl(true); // Empieza la visualización de "Descargando..."

        const fields = Object.fromEntries(new window.FormData(event.target));
        const score = findScore(fields);
        setTimeout(() => {
            downloadPDF(fields, score);
            setControl(false);
        }, 2000);
        
        // Espera la finalización de la descarga

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-10 p-8">
            <div className="flex flex-wrap gap-6 justify-center">
                <Name />
                <Id />
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
                <RangoEdad />
                <EstadoCivil />
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
                <Genero />
                <Vivienda />
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
                <Estudios />
                <Ingresos />
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
                <Antiguedad />
            </div>
            <button
                type="submit"
                className="bg-[#1D71B9] w-[400px] rounded-xl text-2xl font-semibold text-white py-2 border-2
                hover:scale-105 hover:bg-[#2D2D83] duration-300">
                {control ? 'Descargando...' : 'Descargar'}
            </button>
        </form>
    );
}
