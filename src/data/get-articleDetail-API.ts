const getArticleDeatilAPI = async (id:number) => {

    const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
   const data = await response.json()
    return data.results
}

export default getArticleDeatilAPI