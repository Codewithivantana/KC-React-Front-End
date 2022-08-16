const Hero = ({ image_url }) => {
  const style = {
    "--hero-image": "url( " + image_url + ")"
  };

  return (
    <div style={style} className="Hero">
      <div className="text">
        <h1>Header</h1>
        <p>paragraph</p>
      </div>
    </div>
  );
};

export default Hero;
