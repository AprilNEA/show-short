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

                <div className="flex-1 flex flex-col sm:flex-row py-10">
                    <main className="flex-1">
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
                                                {data.links.map(({id, icon, title, shortURL, originalURL}) => (
                                                    // <tr key={id} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                    <tr key={id} className='bg-white'>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 h-5 w-5">
                                                                    <img className="h-5 w-5 rounded-full" src={icon}
                                                                         alt=""/>
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div
                                                                        className="text-sm font-medium text-gray-900">{title}</div>
                                                                    <div
                                                                        className="text-sm text-gray-500">{originalURL}</div>
                                                                </div>
                                                            </div>

                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{shortURL}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <a href={originalURL}
                                                               className="text-indigo-600 hover:text-indigo-900">
                                                                Go
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

                </div>

                <footer className="mx-auto text-gray-400">Power by AprilNEA</footer>
            </div>
        </>
    )
}

export async function getServerSideProps(context: any) {
    // Fetch data from external AP
    const base_url = process.env.NODE_ENV == "production" ?
        `https://${context.req.headers.host}`
        : `http://${context.req.headers.host}`

    const res = await fetch(`${base_url}/api/links`, {method: 'GET'})
    const data = await res.json()

    // Pass data to the page via props
    return {props: {data}}
}
