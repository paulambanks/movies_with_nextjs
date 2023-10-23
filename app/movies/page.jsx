import {Suspense} from "react";
import dynamic from 'next/dynamic'
import Loading from "@app/loading";

const Feed = dynamic(() => import('@components/Feed'), {
    suspense: true,
    ssr: false,
})

const Movies = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>
                Discover & Share
                <br className='max-md:hidden' />
                <span className='blue_gradient text-center'> Hyped movies</span>
            </h1>
            <p className='desc text-center'></p>
            <Suspense fallback={<Loading />}>
                <Feed />
            </Suspense>
        </section>
    )
}

export default Movies;