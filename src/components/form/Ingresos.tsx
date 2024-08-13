export default function Ingresos() {
    return (
        <div
            className="w-[450px] group flex flex-col items-start justify-start border-gray-300 border-2 rounded-xl p-2 transition-colors
            duration-300 ease-in-out hover:border-blue-500 focus-within:border-blue-500 focus-within:shadow-xl shadow-blue-400">
            <label className="text-sm text-gray-400" htmlFor="ingresos">Ingreso Mensual</label>
            <select
                className="px-3 focus:outline-none text-xl w-full font-semibold text-center"
                name="ingresos" id="ingresos" required>
                <option key="ingreso1" value="">-- Seleccione su Ingreso Mensual --</option>
                <option key="ingreso2" value="Hasta 2 smmlv">Hasta 2 smmlv</option>
                <option key="ingreso3" value="Mayor a 2 smmlv">Mayor a 2 smmlv</option>
            </select>
        </div>
    )
}