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

    return { instance, categories, getCategories}
}