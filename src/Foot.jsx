import react from 'react'

const Foot =()=>{
    const year=new Date().getFullYear()
    return (
        <>
        <footer className='w-100 bg-light text-center foot'>
        <p>copywright © {year}| All rights are reserverd|</p>
        </footer>
        </>
    )

}
export default Foot;