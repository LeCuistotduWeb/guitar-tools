import { Systems } from '@moonwave99/fretboard.js'
import { NoteType } from 'interfaces'
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

const scale = {
  type: 'minor',
  root: 'A'
}

const notes: NoteType = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

const Home: NextPage = () => {

  const [options, setoOptions] = useState({
    type: 'minor',
    root: 'A',
    box: {
      system: Systems.pentatonic,
      box: 1,
  },
  })

  const handleChange = (name: string) => (event: React.FormEvent<HTMLSelectElement>): void => {
    const { value } = event.target as HTMLInputElement;
    setoOptions({ ...options, [name]: value })
  }

  const handleClick = (event: MouseEvent, note: string) => {
    return setoOptions({ ...options, ['root']: note })
  }

  return (
    <DefaultLayout>
      <h1>Gammes, Licks, Accords</h1>

      {/* <form>
        <select onChange={handleChange('root')} name="scale" id="scale" value={options.root}>
          {notes.map((note) => (<option key={note} value={note}>{note}</option>))}
        </select>
      </form> */}

      <h2>Gamme {options.root} </h2>
      <div className="btn-group">
        {notes.map((note) => (<button key={note} onClick={event => handleClick(event, note)} className="btn">{note}</button>))}
      </div>

      <form>
        <select onChange={handleChange('type')} name="scaleType" id="scaleType">
          <option value="major">Major</option>
          <option value="major pentatonic">Pentatonic Major</option>
          <option value="minor pentatonic">Pentatonic Minor</option>
        </select>
      </form>
      <Suspense fallback={`Loading...`}>
        <Fretboard scaleOPtion={options} id="scales" />
      </Suspense>

      {/* <h2>Custom dots</h2>
      <Suspense fallback={`Loading...`}>
        <Fretboard dots={dots} id="dots" />
      </Suspense> */}
    </DefaultLayout>
  )
}

export default Home
