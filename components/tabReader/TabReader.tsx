import { AlphaTabApi } from "@coderline/alphatab";
import { useEffect, useRef, useState } from "react"
import styles from 'styles/components/alphatab.module.scss'

type Props = {}

const settings = {
    // file: "http://localhost:3000/tabs/strings.gpx",
    core: {
        tex: true
    },
    // display: {
    //     staveProfile: "Default",
    //     resources: {
    //         // staffLineColor: "rgb(200, 10, 110)"
    //     }
    // },
    // notation: {
    //     elements: {
    //         scoreTitle: false,
    //         scoreWordsAndMusic: false,
    //         effectTempo: true,
    //         guitarTuning: false
    //     }
    // },
    // player: {
    //     scrollMode: "off",
    //     enablePlayer: true,
    //     enableUserInteraction: true,
    //     enableCursor: true,
    //     soundFont: `https://alphatab-kpy7o.codesandbox.io/sound_fonts/guitar_nylon.sf2`
    // }
};

const TabReader = (props: Props) => {
    const ref = useRef(null)
    const apiRef = useRef<any>(null)

    useEffect(() => {
        if (ref.current) {
            const alpahatab = initAlphatab(ref);
            // alpahatab.current.soundFontLoaded.on(() => {
            //     setLoaded(true);
            // });
        }
    }, [])

    const initAlphatab = (ref) => {
        return new AlphaTabApi(ref.current, settings);
    }

    console.log({ apiRef, ref })

    return (
        <>
            {/* <button
                onClick={() => {
                    apiRef.current.play();
                }}
                disabled={!loaded}
            >
                play
            </button>
            <button
                onClick={() => {
                    apiRef.current.pause();
                }}
                disabled={!loaded}
            >
                pause
            </button> */}
            <div ref={ref}>
            \title "Hello alphaTab"
            .
            :4 0.6 1.6 3.6 0.5 2.5 3.5 0.4 2.4 |
            3.4 0.3 2.3 0.2 1.2 3.2 0.1 1.1 |
            3.1.1
            </div>
        </>
    )
}

export default TabReader