import './Login.css'

const Login = () => {
  return (
    <>
      <section className="container">
        <div className="content">
          <div className="cta">
            <img
              className="ctaLogoOne"
              src="/images/cta-logo-one.svg"
              alt="Logo One"
            />
            <a href="/" className="singUp">{'Get all there'.toUpperCase()}</a>
            <p className="description">
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+ subscription. As of 03/19/24, the price of
              Disney+ and The Disney Bundle will increase by $1.
            </p>
            <img
              src="/images/cta-logo-two.png"
              alt="Log Two"
              className="ctalogotwo"
            />
          </div>
          <div className="gbImage"></div>
        </div>
      </section>
    </>
  );
};

export default Login;
