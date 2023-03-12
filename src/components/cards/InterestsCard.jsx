import { Paper } from '@mantine/core';

export default function InterestCard(props){
 
    return(
        <>
        <Paper data-aos="fade-up" data-aos-duration="500" data-aos-offset="200" id="cart" withBorder className="shadow-xl px-10 mt-10 py-20" radius="lg">
                <div style={{position: "relative", height: "80px", transform: "scale(4)" ,width: "75px", padding: "30px", margin: "auto", marginBottom: "8%"}}>{props.data.icon}</div>
                <h2 style={{fontSize: "22px"}}>{props.data.title}</h2>
        </Paper>
        </>
    )
}