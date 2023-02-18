import {useState} from 'react'
import useSWR from 'swr'

const people = [
    {name: 'Jane Cooper', title: 'Regional Paradigm Technician', role: 'Admin', email: 'jane.cooper@example.com'},
    {name: 'Cody Fisher', title: 'Product Directives Officer', role: 'Owner', email: 'cody.fisher@example.com'},
    // More people...
]

interface Link {
    lcpath: string
    icon: string
    createdAt: string
    source: string
    DomainId: number
    archived: boolean
    OwnerId: number
    updatedAt: string
    originalURL: string
    tags: string[],
    cloaking: boolean
    title: string
    path: string
    idString: string
    shortURL: string
    secureShortURL: string
    id: string
    User: any
}

interface Links {
    links: Link[]
}

function App() {
    const fetcher = () => fetch('/api/links').then(res => res.json())
    const {data, error, isLoading} = useSWR<Links, any, any>('/api/links', fetcher)

    if (error) return <div>failed to load{JSON.stringify(error)}</div>
    if (isLoading || data == undefined) return <div>loading...</div>

    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Link
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.links.map(({id, title, shortURL}) => (
                                    // <tr key={id} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <tr key={id} className='bg-white'>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{title}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shortURL}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
