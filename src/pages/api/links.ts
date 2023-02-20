import type {NextRequest} from 'next/server'

export const config = {
    runtime: 'edge',
}

export default async function handler(req: NextRequest) {
    const result = await (await fetch(`https://api.short.io/api/links?domain_id=${process.env.DOMAIN_ID}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': process.env.API_TOKEN ?? ''
        }
    })).json()
    return new Response(
        JSON.stringify(result),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        }
    )
}
