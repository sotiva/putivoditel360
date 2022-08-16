import Menu from './components/Menu/Menu';
import Plates from './components/Plates/Plates';

function App() {

  const Points = [
    {
      title: 'Гора Муелды',
      image: '.mueldy.JPG'
    },

    {
      title: 'Нос гора',
      image: './img/mueldy.JPG'
    },

    {
      title: 'Медеплавильные печи',
      image: 'img/mueldy.JPG'
    },

    {
      title: 'Кызыладырское карстовое поле',
      image: 'img/mueldy.JPG'
    },

    {
      title: 'Соленое урочище',
      image: 'img/mueldy.JPG'
    },

    {
      title: 'Пещера Подарок',
      image: 'img/mueldy.JPG'
    }
  ];
  return (
     
    <div>
       
       <Menu/>
       <Plates title={Points[0].title} image={Points[0].image}/>
       <Plates title={Points[1].title} image={Points[1].image}/>
       <Plates title={Points[2].title} image={Points[2].image}/>
       <Plates title={Points[3].title} image={Points[3].image}/>
       <Plates title={Points[4].title} image={Points[4].image}/>
       <Plates title={Points[5].title} image={Points[5].image}/>
    </div>
    
  );
}

export default App;
