import axios from "axios";
import { ref } from 'vue'

const instance = axios.create({
    baseURL:'https://opentdb.com/',
})

const categories = ref([])

export default function useAPI() {
    const getCategories = async () => {
        if (categories.value.length === 0) {
            const responce = await instance.get('api_category.php')
            categories.value = responce.data.trivia_categories
        }
    }

    const getQuestion = async (categoryId) => {
        const responce = await instance.get('api.php', {
            params: {
                amount: 1,
                category: categoryId,
            }
        })

        return responce.data.results[0]
    }

    return { instance, categories, getCategories, getQuestion}
}