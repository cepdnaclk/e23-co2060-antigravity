import "./brandSection.css";
import assistent from "../assets/landing-brands/assistent.svg";
import calender from "../assets/landing-brands/calender.svg";
import chrome from "../assets/landing-brands/chrome.svg";
import docs from "../assets/landing-brands/docs.svg";
import drive from "../assets/landing-brands/drive.svg";
import fitness from "../assets/landing-brands/fitness.svg";
import home from "../assets/landing-brands/home.svg";
import maps from "../assets/landing-brands/maps.svg";
import meet from "../assets/landing-brands/meet.svg";
import photos from "../assets/landing-brands/photos.svg";
import search from "../assets/landing-brands/search.svg";
import shopping from "../assets/landing-brands/shopping.svg";

const logos = [
  assistent,
  calender,
  chrome,
  docs,
  drive,
  fitness,
  home,
  maps,
  meet,
  photos,
  search,
  shopping,
];

function BrandSection() {
  const columns = 4;

  return (
    <>
      <div className="brands">
        <div className="section-brands">
          <p>Most famous brands around the world has connected</p>
        </div>
        {Array.from({ length: columns }).map((_, columnIndex) => (
          <div key={columnIndex} className="brands-wrapper">
            <div className="brands-track">
              {[...logos, ...logos].map((logo, i) => (
                <img key={i} src={logo} alt="brand" className="logoPreview" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="des">
            <div className="companies" style={{fontWeight: "600", fontSize: "25px"}}>For Companies
              
                <p>This is the testing paragraph desctiption for comapnies section </p>
            </div>
              
            <div className="charities" style={{fontWeight: "600", fontSize: "25px"}}>For Charities</div>
      </div>
    </>
  );
}

export default BrandSection;
