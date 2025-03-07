import { services } from '../utils/data';
import Service from './Service';
import Title from './Title';

const Services = () => (
  <section className="section services" id="services">
    <Title title="our" subTitle="services" />

    <div className="section-center services-center">
      {services.map((service) => (
        <Service key={service.id} {...service} />
      ))}
    </div>
  </section>
);

export default Services;
