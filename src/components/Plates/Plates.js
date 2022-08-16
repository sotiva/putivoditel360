function Plate (props){
	 

    return(
       
            <div className="billet">
					<div className="billet__select">
						<h1 className="billet__head">{props.title}</h1>

						 <img src={props.image}></img>
						
						<div className="billet__btn">
							<a href="./#" className="billet__btn_link"><span>Начать тур</span></a>
						</div>
					</div>
				</div>
        
    )
}

export default Plate;