import React from "react";
import Rectangle1 from "../../Assets/images/poster/Rectangle1.png";
import Rectangle2 from "../../Assets/images/poster/Rectangle2.png";
import Rectangle3 from "../../Assets/images/poster/Rectangle3.png";
import Rectangle4 from "../../Assets/images/poster/Rectangle4.png";
import Rectangle5 from "../../Assets/images/poster/Rectangle5.png";
import Rectangle6 from "../../Assets/images/poster/Rectangle6.png";
// import Rectangle7 from "../../Assets/images/poster/Rectangle7.png";
import Rectangle8 from "../../Assets/images/poster/Rectangle8.png";
import Rectangle9 from "../../Assets/images/poster/Rectangle9.png";

const Fead = () => {
  const cards = [
    {
      img: Rectangle1,
      titre: "Peaceful Piano",
      paragraphe: "Peaceful piano to help you slow down, breathe, and...",
    },
    {
      img: Rectangle2,
      titre: "Deep Focus",
      paragraphe: "Keep calm and focus with ambient and post-rock music.",
    },
    {
      img: Rectangle3,
      titre: "Instrumental study",
      paragraphe: "Focus with soft study music in the background.",
    },
    {
      img: Rectangle4,
      titre: "Focus Flow",
      paragraphe: "Uptempo instrumental hip hopbeats.",
    },
    {
      img: Rectangle5,
      titre: "Beats to think to",
      paragraphe: "Focus with deep techno and tech house.",
    },
    {
      img: Rectangle6,
      titre: "Today's top Hits",
      paragraphe: "Harry Styles is on top of the Hottest 50!",
    },
    // {
    //   img: Rectangle7,
    //   titre: "RapCaviar",
    //   paragraphe: "New music from Lil Baby, Gucci Mane and DaBaby.",
    // },
    {
      img: Rectangle8,
      titre: "All Out 2010s",
      paragraphe: "The biggest songs of the 2010s.",
    },
    {
      img: Rectangle9,
      titre: "Rock Classics",
      paragraphe: "Rock legends & epic songs that continue to inspire...",
    },
  ];
  return (
    <div className="container py-3">
      <div className="d-flex justify-content-between">
        <h1 className="text-white text-start my-4">Focus</h1>
        <button className="btn btn-link text-light">Show All</button>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5">
        {cards.map((card, index) => (
          <div className="col mb-3" key={index}>
            <div className="card bg-dark">
              <img src={card.img} className="card-img-top" alt="Img" />
              <div className="card-body">
                <h5 className="card-title text-white">{card.titre}</h5>
                <p className="card-text text-white mt-2">{card.paragraphe}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fead;
