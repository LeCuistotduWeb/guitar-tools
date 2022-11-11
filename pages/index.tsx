import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout'

const Fretboard = dynamic(() => import('../components/fretboard/FretBoard'), {
  suspense: true,
})

const dots = [
  {
    string: 5,
    fret: 3,
  },
]

const dots2 = [
  {
    string: 2,
    fret: 5,
  },
]

const scale = {
  type: 'minor',
  root: 'A'
}

const Home: NextPage = () => {

  const [options, setoOptions] = useState({
    type: 'minor',
    root: 'A'    
  })

  const handleChange = (name: string) => (event: React.FormEvent<HTMLSelectElement>): void => {
    const { value } = event.target as HTMLInputElement;
    setoOptions({ ...options, [name]: value })
  }

  return (
    <DefaultLayout>
      <h1>Gammes, Licks, Accords</h1>

      <form>
        <select onChange={handleChange('root')} name="scale" id="scale" value={options.root}>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="G">G</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </form>

      <form>
        <select onChange={handleChange('type')} name="scaleType" id="scaleType">
          <option value="major">Major</option>
          <option value="minor">Minor</option>
        </select>
      </form>

      <h2>Gamme {options.root} Majeur </h2>
      <Suspense fallback={`Loading...`}>
        <Fretboard scaleOPtion={options} id="scales"/>
      </Suspense>

      <h2>Custom dots</h2>
      <Suspense fallback={`Loading...`}>
        <Fretboard dots={dots} id="dots"/>
      </Suspense>
    </DefaultLayout>
  )
}

export default Home
