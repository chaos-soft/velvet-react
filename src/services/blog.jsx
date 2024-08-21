import axios from 'axios'

class BlogService {
  async getArticle (id) {
    return await axios.get(`articles/${id}`)
  }

  async getArticles (page) {
    return await axios.get(`articles?page=${page}`)
  }
}

const blogService = new BlogService()

export default blogService
