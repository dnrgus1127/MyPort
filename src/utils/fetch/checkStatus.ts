export function checkStatus(status : number) {
    if (status === 404) {
        throw new Response("Not Found", { status: 404 });
    }
    if (status === 403) {
        throw new Response("API limit", { status: 403 });
    }

    return;
}