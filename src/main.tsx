import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.tsx'
import { getGenres } from './services/Genres.service.ts'
import Home from './components/Home/Home.tsx'
import Genres from './components/Genres/Genres.tsx'
import Movies from './components/Movies/Movies.tsx'
import Login from './components/Login/Login.tsx'
import Register from './components/Register/Register.js'
import NotFound from './components/NotFound/NotFound.tsx'
import GenreMovies from './components/Genres/GenreMovies.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home />} />
      <Route 
        loader={getGenres}
        path='genres/' 
        element={<Genres />} 
      /> {/* Check why nesting routing didn't worked here */}
      <Route path='genres/:genreId' element={<GenreMovies />} />
      <Route path='movies/' element={<Movies />} />
      <Route path='login/' element={<Login />} />
      <Route path='register/' element={<Register />} />
      <Route path='*' element={<NotFound/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
