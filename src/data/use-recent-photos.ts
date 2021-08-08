import useSWR from 'swr';

const URL = ` https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.API_KEY}&format=json&nojsoncallback=1`;

const getRecentPhotos = async () =>
  await fetch(URL, {
    method: 'GET',
  });

export const useRecentPhotos = () => {
  const { data, error } = useSWR('photos', getRecentPhotos);
};
