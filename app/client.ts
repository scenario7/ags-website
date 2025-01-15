import {createClient} from '@sanity/client'

const client = createClient({
    projectId: '4twd7f07', 
    dataset: 'production', 
    useCdn: true,
    apiVersion : '2024-10-10'
})

export default client