export async function GET(request, { params }) {
    const { movieId } = params;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return new Response(JSON.stringify(data));
}