export default function RangoEdad() {
    return (
        <div
            className="w-[450px] group flex flex-col items-start justify-start border-gray-300 border-2 rounded-xl p-2 transition-colors
            duration-300 ease-in-out hover:border-blue-500 focus-within:border-blue-500 focus-within:shadow-xl shadow-blue-400">
            <label className="text-sm text-gray-400" htmlFor="edad">Rango Edad</label>
            <select
                className="px-3 focus:outline-none text-xl w-full font-semibold text-center"
                name="edad" id="edad" required>
                <option key="edad1" value="">-- Seleccione un Rango --</option>
                <option key="edad2" value="Hasta 30 años">Hasta 30 años</option>
                <option key="edad3" value="Entre 30 años y 50 años">Entre 30 años y 50 años</option>
                <option key="edad4" value="Mayor a 50 años">Mayor a 50 años</option>
            </select>
        </div>
    )
}