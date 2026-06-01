"use server"

import axios from 'axios'

export async function explain (prevState, formData){
    
    const code = formData.get("code");
    const language = formData.get("language");

    try {
        const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/explain-code`, {
            code,
            language
        })
        
        const data = res.data;
        
        return {
            success: true,
            data
        }
    } catch (error) {
        return {
            success: false,
            error: `An error occured: ${error?.message}`,
        }
    }
}