export default function Table() {
    return (
        <div className="shadow-lg rounded-lg overflow-hidden mt-8">
            <table className="w-full table-fixed">
                <thead>
                <tr className="bg-zinc-700">
                    <th className="w-1/4 py-4 px-6 text-left text-white font-bold uppercase">Імʼя</th>
                    <th className="w-1/4 py-4 px-6 text-left text-white font-bold uppercase">Контакт</th>
                    <th className="w-1/4 py-4 px-6 text-left text-white font-bold uppercase">Початковий статус</th>
                </tr>
                </thead>
                <tbody className="bg-zinc-800">
                <tr>
                    <td className="py-4 px-6 border-b border-gray-200">1John Doe</td>
                    <td className="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                    <td className="py-4 px-6 border-b border-gray-200">
                        <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                    </td>
                </tr>
                <tr>
                    <td className="py-4 px-6 border-b border-gray-200">2Jane Doe</td>
                    <td className="py-4 px-6 border-b border-gray-200 truncate">janedoe@gmail.com</td>
                    <td className="py-4 px-6 border-b border-gray-200">
                        <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Inactive</span>
                    </td>
                </tr>
                <tr>
                    <td className="py-4 px-6 border-b border-gray-200">3Jane Doe</td>
                    <td className="py-4 px-6 border-b border-gray-200 truncate">janedoe@gmail.com</td>
                    <td className="py-4 px-6 border-b border-gray-200">
                        <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Inactive</span>
                    </td>
                </tr>
                <tr>
                    <td className="py-4 px-6">4Jane Doe</td>
                    <td className="py-4 px-6 truncate">janedoe@gmail.com</td>
                    <td className="py-4 px-6">
                        <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Inactive</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}