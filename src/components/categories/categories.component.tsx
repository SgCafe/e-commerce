import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Utilities
import Category from '../../types/categories.types'
import env from '../../config/env.config'

// Style
import './categories.style.css'

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([])

    console.log(categories)

    
    const fetchCategories = async () =>{
        try{
            const {data} = await axios.get(`${env.apiUrl}/api/category`)
            
            setCategories(data)
            console.log(data)
        }catch (error) {
            console.log({ error })
        }
    }
    
    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div className="categories-container">
            <div className="categories-content">
                aaa

            </div>
        </div>
    )

}

export default Categories