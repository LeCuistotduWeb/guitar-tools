import type { NextPage } from 'next'
import DefaultLayout from '../../components/layouts/DefaultLayout'
import TabReader from '../../components/tabReader/TabReader'

const MajorScale: NextPage = () => {

    return (
        <DefaultLayout>
            <h1>Tabs reader</h1>
            <TabReader/>
        </DefaultLayout>
    )
}

export default MajorScale
