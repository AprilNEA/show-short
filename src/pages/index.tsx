import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'

const inter = Inter({subsets: ['latin']})

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

export default function Home({data}: { data: Links }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="min-h-screen flex flex-col">
                <header className="bg-red-50">Header</header>

                <div className="flex-1 flex flex-col sm:flex-row">
                    <main className="flex-1 bg-indigo-100">
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
                    </main>

                    <nav className="order-first sm:w-32 bg-purple-200">Sidebar</nav>

                    <aside className="sm:w-32 bg-yellow-100">Right Sidebar</aside>
                </div>

                <footer className="bg-gray-100">Footer</footer>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/links`, {method: 'GET'})
    const data = await res.json()

    // Pass data to the page via props
    return {props: {data}}
}