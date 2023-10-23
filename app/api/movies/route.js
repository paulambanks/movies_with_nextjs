export async function GET(request, route) {
    const searchUrl = new URL(request.url);
    const page = searchUrl.searchParams.get("page")

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    return new Response(JSON.stringify(data));
}