import React from 'react';

import FormSignIn from '../../../components/FormSignUp'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Nav/>
      <Container>
        <section className="signup-section">
          <div className="signup-text">
            textos
          </div>
          <div className="signup-form">
            <FormSignIn />
          </div>
        </section>

        <section className="cta-section">
          <div>
            CTA
          </div>
        </section>
      </Container>
      <Footer/>
    </>
  );
}

export default Home;