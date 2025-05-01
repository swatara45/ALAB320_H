import './App.css';
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/footer';
//import images from './images/blog-image-1.jpg'

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="posts">
        <Article
        datetime="2020-11-12"
        title="On the Street in Brooklyn"
        image="/images/blog-image-1.jpg"
        alt="Mountain view"
        text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sapiente corrupti, nemo ipsum error
          laudantium repudiandae, cupiditate accusamus rem ut sequi? Amet veniam, at assumenda quisquam dolorum et
          iste dolor beatae voluptates impedit quod, ex minima odio fuga dignissimos! Provident, harum aliquam
          eveniet ex delectus corrupti quasi error vel maiores!`}
          />

          <Article
            datetime="2020-11-12"
            title="Vintage In Vogue"
            image="/images/blog-image-2.jpg"
            alt="Coffee and notebook"
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab pariatur at consequuntur enim iure ex,
            commodi molestiae ipsa? Temporibus ipsum aspernatur vero vel sapiente illo odio perferendis, voluptas
            ducimus similique voluptatibus commodi assumenda ipsa libero sint saepe iste porro beatae blanditiis
            facere est asperiores perspiciatis. Magni voluptates illo porro.`}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;