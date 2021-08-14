import useSWR from 'swr';

const getSearchResults = async (url) => {
  try {
    const res = await (
      await fetch(url, {
        method: 'GET',
      })
    ).json();
    return res.photos;
  } catch (err) {
    console.error(err);
  }
};

export const useSearchPhotos = ({ searchText }) => {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
    import.meta.env.VITE_API_KEY
  }&text=${searchText}&format=json&nojsoncallback=1`;

  const { data, error } = useSWR(url, getSearchResults);

  return {
    searchResults: data,
    error,
  };
};
