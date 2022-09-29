import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layout/Default'
import { Home } from '../pages/Home'
import { Post } from '../pages/Post'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="post/:id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
