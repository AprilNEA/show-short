import type {NextRequest} from 'next/server'

export const config = {
    runtime: 'edge',
}

export default async function handler(req: NextRequest) {
    const result = await (await fetch('https://api.short.io/api/links?domain_id=591161', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'sk_yCuRMTas3rCA8clA'
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