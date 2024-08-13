export default function Vivienda() {
    return (
        <div
            className="w-[450px] group flex flex-col items-start justify-start border-gray-300 border-2 rounded-xl p-2 transition-colors
            duration-300 ease-in-out hover:border-blue-500 focus-within:border-blue-500 focus-within:shadow-xl shadow-blue-400">
            <label className="text-sm text-gray-400" htmlFor="vivienda">Tipo de Vivienda</label>
            <select
                className="px-3 focus:outline-none text-xl w-full font-semibold text-center"
                name="vivienda" id="vivienda" required>
                <option key="vivienda1" value="">-- Seleccione su tipo de Vivienda --</option>
                <option key="vivienda2" value="Familiar">Familiar</option>
                <option key="vivienda3" value="Arriendo">Arriendo</option>
                <option key="vivienda4" value="Propia">Propia</option>
            </select>
        </div>
    )
}