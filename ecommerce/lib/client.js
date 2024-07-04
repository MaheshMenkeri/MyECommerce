// import sanityClient from '@sanity/client';
import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


 export const client = createClient({
    projectId: 'v5rxf44s',
    dataset: 'production',
    apiVersion:'2024-03-02',
    useCdn: false,
    // token: import.meta.env.VITE_PUBLIC_SANITY_TOKEN
    // process.env.PUBLIC_SANITY_TOKEN
    
});
 
const buider = imageUrlBuilder(client);


export const urlFor = (source) => buider.image(source);


