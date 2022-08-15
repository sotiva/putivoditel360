import  './style__burger.css';
import './style__menu.css';
function Menu()  {
  
  let burger = document.querySelector('.burger');
		burger.addEventListener("mouseover", function(){
			document.getElementsByClassName('nav')[0].style = "overflow: visible";
		});

		let nav = document.querySelector('.nav')

		nav.addEventListener("mouseover", function(){
			 document.getElementsByClassName('nav')[0].style = "overflow: visible";
		});

		nav.addEventListener("mouseout", function(){
			 document.getElementsByClassName('nav')[0].style = "overflow: hidden";
		});
  
    
    return  (
      <div>
        <div className="burger"><i class="fa-2xl fa-solid fa-bars"></i></div>
        <div className="nav">
		

		<ul class="nav__menu">
			<li className="nav__menu_item"><a href="./#" className = "menu_item-link">Дом</a> </li>
			<li className="nav__menu_item"><a href="./#" className = "menu_item-link">Маршруты</a> </li>
			<li className="nav__menu_item"><a href="./#"className = "menu_item-link">О проекте</a> </li>
			<li className="nav__menu_item"><a href="./#"className = "menu_item-link">Продукты</a> </li>
			<li className="nav__menu_item"><a href="./#"className = "menu_item-link">Помощь</a> </li>
			<li className="nav__menu_item"><a href="./#"className = "menu_item-link">Язык</a> </li>
		</ul>
	</div>
      </div>
    );
    
  };
  
  export default Menu;
  