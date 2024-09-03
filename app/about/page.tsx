import dynamic from 'next/dynamic';

const AboutMe = dynamic(() => import('@/components/AboutMe'));
 

const about= ()=>{
    return (
        <div className="h-screen w-full">
 
            <AboutMe />
 
        </div>
    )
}


export default about