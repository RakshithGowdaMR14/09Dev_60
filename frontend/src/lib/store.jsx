import { createContext, useContext, useMemo, useState } from 'react'

const Ctx = createContext(null)

export function AppStoreProvider({ children }) {
  const [user, setUser] = useState(null) // {id, name, email}
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')||'[]'))
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem('history')||'[]'))
  const [viewMode, setViewMode] = useState('list') // 'list' | 'map'

  const addFavorite = (ph) => {
    const next = [...new Set([ph.id, ...favorites])]
    setFavorites(next)
    localStorage.setItem('favorites', JSON.stringify(next))
  }
  const removeFavorite = (id) => {
    const next = favorites.filter(x=>x!==id)
    setFavorites(next)
    localStorage.setItem('favorites', JSON.stringify(next))
  }
  const addHistory = (q) => {
    const next = [q, ...history.filter(x=>x!==q)].slice(0,5)
    setHistory(next)
    localStorage.setItem('history', JSON.stringify(next))
  }

  const value = useMemo(()=>({
    user, setUser, favorites, addFavorite, removeFavorite,
    history, addHistory, viewMode, setViewMode
  }), [user, favorites, history, viewMode])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useAppStore = () => useContext(Ctx)
