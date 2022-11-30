import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import { NoteType } from '../../interfaces'

const Fretboard = dynamic(() => import('../../components/fretboard/FretBoard'), {
    suspense: true,
})

const MajorScale: NextPage = () => {

    const notes: NoteType = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

    return (
        <DefaultLayout>
            <h1>Major Sclcales</h1>
            {notes && notes.map((note, index) => (
                <section key={index}>
                    <h2>{note} Major scale</h2>
                    <Suspense fallback={`Loading...`}>
                        <Fretboard scaleOPtion={{ root: note, type: 'major' }} id={`scale-${note}`} />
                    </Suspense>
                </section>
            ))}
        </DefaultLayout>
    )
}

export default MajorScale
