export default function EstadoCivil() {
    return (
        <div
            className="w-[450px] group flex flex-col items-start justify-start border-gray-300 border-2 rounded-xl p-2 transition-colors
            duration-300 ease-in-out hover:border-blue-500 focus-within:border-blue-500 focus-within:shadow-xl shadow-blue-400">
            <label className="text-sm text-gray-400" htmlFor="civil">Estado Civil</label>
            <select
                className="px-3 focus:outline-none text-xl w-full font-semibold text-center"
                name="civil" id="civil" required>
                <option key="civil1" value="">-- Seleccione su estado civil --</option>
                <option key="civil2" value="Union Libre">Union Libre</option>
                <option key="civil3" value="Soltero">Soltero</option>
                <option key="civil4" value="Casado">Casado</option>
            </select>
        </div>
    )
}