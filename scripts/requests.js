
const baseUrl = 'https://m2-api-living.herokuapp.com/news'

export const getCategory = async (post) => {

    try {
        const responseJson = await fetch(`${baseUrl}?post=${post}`)
        const response = await responseJson.json()

        if (responseJson.ok) {
            return response.news.map(e => e.category)

        }
    } catch (error) {
        console.log(error)
    }
}

export const getPost = async (post) => {

    try {
        const responseJson = await fetch(`${baseUrl}?post=${post}`)
        const response = await responseJson.json()

        if (responseJson.ok) {
            return response.news
        }
    } catch (error) {
        console.log(error)
    }
}
getPost()

export const getPostCurrent = async (id) => {
    try {
        const responseJson = await fetch(`${baseUrl}?post=${post}`)
        const response = await responseJson.json()

        if (responseJson.ok) {
            return response.news
        }
    } catch (error) {
        console.log(error)
    }
}



const catLocalsToragy = () => {
    const cat = localStorage.getItem("cat")

    if (!cat) {
        localStorage.setItem("cat", "Todos")
    }
}
catLocalsToragy()



