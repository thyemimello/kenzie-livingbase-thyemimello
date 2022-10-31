const baseUrl = "https://m2-api-living.herokuapp.com";

export const getPost = async () => {
  try {
    const responseJson = await fetch(`${baseUrl}/news`);
    const response = await responseJson.json();

    if (responseJson.ok) {
      return response.news;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = async (category) => {
  try {
    const responseJson = await fetch(`${baseUrl}/news`);
    const response = await responseJson.json();

    if (responseJson.ok) {
      return response.news.filter((newsCategory) => {
        if (newsCategory.category == category) {
          return newsCategory;
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};
