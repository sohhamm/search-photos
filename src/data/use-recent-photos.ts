import useSWR from 'swr';

const URL = ` https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${
  import.meta.env.VITE_API_KEY
}&format=json&nojsoncallback=1`;

const getRecentPhotos = async () => {
  try {
    const res = await (
      await fetch(URL, {
        method: 'GET',
      })
    ).json();
    return res.photos;
  } catch (err) {
    console.error(err);
  }
};

export const useRecentPhotos = () => {
  const { data, error } = useSWR('photos', getRecentPhotos);

  return {
    recentPhotos: data,
    error,
  };
};
