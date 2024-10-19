import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const apiKey = 'AIzaSyCRV4FFgBj0Mc8aASGUPxbu--NKYHuVDog'
// Use Edge runtime configuration
export const config = {
  runtime: 'edge', // Important for using Next.js Edge functions
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new NextResponse(JSON.stringify({ message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Parse the request body as JSON
    const { topTracks, topArtists, genres } = await req.json();

    if (!topTracks || !topArtists || !genres) {
      return new NextResponse(JSON.stringify({ message: 'Missing data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Initialize GoogleGenerativeAI with your API key
    const genAI = new GoogleGenerativeAI(
      'AIzaSyCRV4FFgBj0Mc8aASGUPxbu--NKYHuVDog');

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

//     // Define the prompt based on the user's top music preferences
    const prompt = `
      Based on the following music data, suggest design elements for a personalized internet bedroom image with url:
      Top Tracks: ${topTracks.map(track => track.name).join(', ')}
      Top Artists: ${topArtists.map(artist => artist.name).join(', ')}
      Genres: ${genres.join(', ')}
      
    `;


      console.log(prompt)

//     // Generate the text using the Google Generative AI API
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const output = await response.text();
    // console.log(output)
    

    // const imageResponse = await fetch('https://api.deepai.org/api/text2img', {
    //   method: 'POST',
    //   headers: {
    //     'Api-Key': 'e7beec2e-db40-48e6-b0d6-e4748e5dd7a1',
    //   },
    //   body: JSON.stringify({
    //     text: output,
    //   }),
    // });
    // const data = await imageResponse.json();
    // console.log(data);

    // const imagResponse = fetch('https://api.pexels.com/v1/search?query=${result}', {
    //   headers: {
    //     Authorization: '24ZMWxSxqJnVu8DWl2TFGq0ULl675y5SvC9kXoCpVcz1CAeEahq8bKyV',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => setImages(data.photos));

    



//     // // // Send the response as JSON
    return new NextResponse(JSON.stringify({suggestions: output }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });


  } catch (error) {
    console.error('Google Generative AI API error:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch suggestions' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}






