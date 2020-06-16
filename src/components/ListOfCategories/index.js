import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

// Costum Hook
function useCategoriesData () {
  // Creando estados iniciales.
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('http://localhost:3000/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])


  return { categories, loading }
}

export const ListOfCategories = () => {

  // Obtener los valores de los estados en en el custom hook
  const { categories, loading } = useCategoriesData()
  
  const [showFixed, setShowFixed] = useState(false)


  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}