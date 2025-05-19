import axios from 'axios'

const apiServices = {
  getBlog: async page => {
    try {
      const response = await axios.get(
        'https://tkj.smkdaka.sch.id/wp-json/wp/v2/posts',
        {
          params: {
            author: 1,
            per_page: 10,
            page: page,
            _embed: true // ini penting untuk ambil featured image
          }
        }
      )
      return response
    } catch (err) {
      return err.response
    }
  }
}

export default apiServices
