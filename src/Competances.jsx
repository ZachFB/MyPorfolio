import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from './assets/meter1.svg'; // En supposant que les images se trouvent dans le dossier "assets"
import img2 from './assets/meter2.svg';
import img3 from './assets/meter3.svg';

const Competances = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 475 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 475, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  // Implémenter les transitions automatiques de diapositives (choisir une option):

  // Option 1 : Utiliser le prop `autoPlay`
  return (
    <div className='flex justify-center w-full mt-[-550px]' id='Competances'>
    <div className='w-[90%] h-[420px] rounded-xl shadow-lg bg-[#121212] mx-auto pt-10'>
      <h1 className='font1 mb-4 text-3xl'>Compétences</h1> 
      <p className='font2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <br />
      <br />
      <Carousel
      className=''
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true} // Activer les transitions automatiques de diapositives
        autoPlaySpeed={5000} // Changer de diapositive toutes les 1 secondes
        keyBoardControl={true}
        customTransition="all 1s ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className='item1 relative font1 flex justify-center '>
          <img src={img1} alt="" />
          <p className='mt-12 absolute'>React JS</p>
        </div>
        <div className='item2 relative font1 flex justify-center '>
          <img src={img2} alt="" />
          <p className='mt-12 absolute'>WordPress</p>
        </div>
        <div className='item3 relative font1 flex justify-center '>
          <img src={img3} alt="" />
          <p className='mt-12 absolute'>Web Design</p>
        </div>
        {/* ... Ajouter d'autres éléments si nécessaire */}
      </Carousel>
    </div>
    </div>
  );

  // Option 2 : Utiliser une logique personnalisée avec state et useEffect (exemple)
  // const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  //   }, 1000); // Changer de diapositive toutes les 1 secondes

  //   return () => clearInterval(intervalId);
  // }, []);

  // return (
  //   {/* ... le reste de votre code */}
  //   <Carousel
  //     {/* ... */}
  //   >
  //     {/* ... */}
  //   </Carousel>
  // );
};

export default Competances;