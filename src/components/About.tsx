import aboutImg from '../images/about.jpeg';
import Title from './Title';

const About = () => (
  <section className="section" id="about">
    <Title title="about" subTitle="us" />

    <div className="section-center about-center">
      <div className="about-img">
        <img className="about-photo" src={aboutImg} alt="awesome beach" />
      </div>

      <article className="about-info">
        <h3>explore the difference</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
          unde dolor?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
          unde dolor?
        </p>
        <button className="btn" type="button">
          read more
        </button>
      </article>
    </div>
  </section>
);

export default About;
