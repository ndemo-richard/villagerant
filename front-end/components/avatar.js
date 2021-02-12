export default function Avatar({name, picture}){
    return(
        <div className="container">
            <img className="round-image" src={picture} alt={name}/>
            <div className="bold-font">{name}</div>
            <style jsx>{`
            .container{
                display:flex;
                align-items:center;
                flex-direction:row;
                margin-right:2rem;
            }
            .round-image{
                border-radius:100%;
                background-color:inherit;
                width:2.5rem;
                height:2.5rem;
               

            }
            .bold-font{
                color:grey;
                font-weight:400;
                margin-left:0.5rem;
                padding-bottom:0.5rem;
                font-size:0.8rem;

            }

            `}</style>
        </div>
    )

}