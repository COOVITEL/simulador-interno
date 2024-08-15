export default function Antiguedad() {
    return (
        <div
            className="w-[450px] group flex flex-col items-start justify-start border-gray-300 border-2 rounded-xl p-2 transition-colors
            duration-300 ease-in-out hover:border-blue-500 focus-within:border-blue-500 focus-within:shadow-xl shadow-blue-400">
            <label className="text-sm text-gray-400" htmlFor="antiguedad">Antiguedad como Asociado</label>
            <select
                className="px-3 focus:outline-none text-xl w-full font-semibold text-center"
                name="antiguedad" id="antiguedad" required>
                <option key="antiguedad1" value="">-- Seleccione su rango de Antiguedad --</option>
                <option key="antiguedad2uj " value="Hasta 4 años">De 0 a 4 años como afiliado</option>
                <option key="antiguedad3" value="Mayor a 4 años">Mayor a 4 años como afiliado</option>
            </select>
        </div>
    )
}