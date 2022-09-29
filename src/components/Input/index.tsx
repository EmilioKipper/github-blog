import { useContext, useMemo } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { InputText } from './styles'

export function Input() {
  const { searchPost } = useContext(UserContext)

  const debounce = (func: (search: any) => void) => {
    let timer: number | undefined | null
    return function (...args: any) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
        func(args)
      }, 1500)
    }
  }

  const optimizedFn = useMemo(() => debounce(searchPost), [searchPost])

  return (
    <InputText
      type="text"
      placeholder="Buscar conteúdo"
      onChange={(e) => optimizedFn(e.target.value)}
    />
  )
}
