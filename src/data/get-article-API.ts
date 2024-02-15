const getArticleAPI = async () => {

    const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles")
   const data = await response.json()
    return data.results
}

export default getArticleAPI