import "./styles.css";
import Navigation from "./components/navigation";
import Hero from "./components/hero";

const links = [
  { url: "/about", name: "about" },
  { url: "/contact", name: "contact" },
  { url: "/services", name: "services" }
];
const logo = {
  url: "/",
  image:
    "https://ivan-tana.github.io/paveway-brand-buzz-web/asserts/SVG/brand_bozz_white_logo_icon.svg"
};

const hero_image =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";

export default function App() {
  return (
    <div className="app-container">
      <Navigation logo={logo} links={links} />
      <Hero image_url={hero_image} />
    </div>
  );
}
