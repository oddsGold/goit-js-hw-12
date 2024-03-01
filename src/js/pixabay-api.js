import axios from "axios";

const key = "42527051-ab9ea8069b5c425aa0269f2a2";

export const params = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true
}

const INSTANCE =  axios.create({
  baseURL: `https://pixabay.com/api`,
  headers: {'Accept': 'application/json'}
});

  export async function getAllImages(inputResult) {
    const response = await INSTANCE.get(`?key=${key}&q=${encodeURIComponent(inputResult)}`, {params: params});
    return response.data;
  }

