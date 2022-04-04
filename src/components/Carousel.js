import './Carousel.css'

const Carousel = () => {
  const messages = [
    'Pork ribs',
    'Omelette',
    'Fried Rice',
    'confit de canard',
  ]

  return (
    <section className='Carousel'>
      {messages.map((message, index) => (
        <div key={`carousel${index}`} className='CarouselItem'>{message}</div>
      ))}
    </section>
  )
}

export default Carousel
