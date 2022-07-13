import axios from 'axios'

const url = "https://api.giphy.com/v1/gifs"

const api_key = "5lkH9i5monHElq19pfoOQjC0mTweBZGk"

export default async function getGifs(query) {
    let full_url = url + "/search?api_key=" + api_key + "&q=" + query + "&limit=20&offset=0&rating=G&lang=en"

    try {
        const response = await axios.get(full_url).then(res => res.data.data)
        //console.log(response)
        return response;
    } catch (error) {
        console.log('Error in getGifs', error)
    }
}