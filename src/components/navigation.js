const Navigation = ({ links, logo }) => {
  return (
    <section>
      <div className="nav-bar">
        <div className="left">
          <a href={logo.url}>
            <img src={logo.image} alt="logo" />
          </a>
        </div>
        <div className="right">
          {links.map((link) => {
            return <a href={link.url}>{link.name}</a>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Navigation;
