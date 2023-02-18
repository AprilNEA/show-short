interface Env {
    TOKEN: string
    DOMAIN_ID: string
}

export const onRequest: PagesFunction<Env> = async (context) => {
    const result = await (await fetch('https://api.short.io/api/links?domain_id=ffffff', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'ffffff'
        }
    })).json()
    return new Response(JSON.stringify(result), {
        status: 200,
        headers: {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
            'Access-Control-Max-Age': '86400',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
    })
}