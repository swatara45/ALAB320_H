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
            title="First Blog Post"
            image="/images/blog-image-1.jpg"
            alt="Mountain view"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Article
            title="Second Blog Post"
            image="/images/blog-image-2.jpg"
            alt="Coffee and notebook"
            text="Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;