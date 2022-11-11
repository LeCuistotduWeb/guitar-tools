import { Fretboard as FretboardLib } from "@moonwave99/fretboard.js";
import { useEffect, useRef } from "react"

type Props = {
    id: string,
    dots?: any[];
    scaleOPtion?: { type: string, root: string } | null,
}

const Fretboard = (props: Props) => {
    const { dots = [], scaleOPtion = null, id = "" } = props
    const ref = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const elt = ref.current;
        let figure = document.createElement('figure')
        if (elt) {
            elt.appendChild(figure)
            const fretboard = new FretboardLib({
                el: elt.querySelector('figure'),
            })
            if (scaleOPtion) {
                fretboard.renderScale(scaleOPtion).render();
            }
            if (dots.length > 0) {
                fretboard.setDots(dots).render()
            }
        }
        return (() => {
            figure.remove()
        })
    }, [scaleOPtion, dots])

    return <div className="fretboard" ref={ref}></div>
}

export default Fretboard