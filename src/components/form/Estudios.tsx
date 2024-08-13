export default function Estudios() {
    return (
        <div
            className="w-[450px] group flex flex-col items-start justify-start border-gray-300 border-2 rounded-xl p-2 transition-colors
            duration-300 ease-in-out hover:border-blue-500 focus-within:border-blue-500 focus-within:shadow-xl shadow-blue-400">
            <label className="text-sm text-gray-400" htmlFor="estudios">Nivel Academico</label>
            <select
                className="px-3 focus:outline-none text-xl w-full font-semibold text-center"
                name="estudios" id="estudios" required>
                <option key="estudios1" value="">-- Seleccione su Nivel Academico --</option>
                <option key="estudios2" value="Desconocido / Secundaria / Tecnica">Desconocido / Secundaria / Tecnica</option>
                <option key="estudios3" value="Universitario / Maestria / Doctorado">Universitario / Maestria / Doctorado</option>
            </select>
        </div>
    )
}