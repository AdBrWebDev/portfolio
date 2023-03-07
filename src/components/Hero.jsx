export default function Hero(){

    return(
        <>
            <div style={{zIndex: -10, boxShadow: '0 0 200px 40px rgba(1,1,1,.4)'}} >
                <img src="images/hero.jpg" style={{zIndex: -10, backgroundSize: "cover"}} height={`${window.innerHeight}px`} width={`${window.innerWidth}px`} alt="" />
            </div>
        </>
    )
}