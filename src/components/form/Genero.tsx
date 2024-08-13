export default function Genero() {
    return (
        <div
            className="w-[450px] group flex flex-col items-start justify-start border-gray-300 border-2 rounded-xl p-2 transition-colors
            duration-300 ease-in-out hover:border-blue-500 focus-within:border-blue-500 focus-within:shadow-xl shadow-blue-400">
            <label className="text-sm text-gray-400" htmlFor="genero">Genero</label>
            <select
                className="px-3 focus:outline-none text-xl w-full font-semibold text-center"
                name="genero" id="genero" required>
                <option key="genero1" value="">-- Seleccione su Genero --</option>
                <option key="genero2" value="Femenino">Femenino</option>
                <option key="genero3" value="Masculino">Masculino</option>
            </select>
        </div>
    )
}