import React from "react";
import "../home.css";
import Product from "./product";

function Home() {
  return (
    <div className="home">
      <div className="home_conteiner">
        <img
          className="home_image"
          src="https://mk0meaningfullibmht6.kinstacdn.com/wp-content/uploads/2014/03/Books-banner-400x187.jpg.webp"
          alt="banner"
        />
        <div className="home_row">
          <Product
            id="1"
            title="The lean startap"
            price={29.99}
            image="https://pictures.abebooks.com/isbn/9780307887894-us-300.jpg"
            raiting={5}
          />
          <Product
            id="2"
            title="Mreza vremena"
            price={19.99}
            image="https://www.laguna.rs/_img/korice/76/mreza_vremena-majkl_krajton_s.jpg"
            raiting={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="Zivot na nasoj planeti"
            price={17.99}
            image="https://www.laguna.rs/_img/korice/4985/zivot_na_nasoj_planeti-dejvid_atenboro_s.png"
            raiting={5}
          />
          <Product
            id="4"
            title="Plen"
            price={15.99}
            image="https://www.laguna.rs/_img/korice/184/plen-majkl_krajton_s.jpg"
            raiting={5}
          />
          <Product
            id="5"
            title="Jedan jedini pogled"
            price={12.99}
            image="https://www.laguna.rs/_img/korice/537/jedan_jedini_pogled-harlan_koben_s.jpg"
            raiting={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="6"
            title="Prema istinitoj prici"
            price={16.99}
            image="https://www.laguna.rs/_img/korice/4754/prema_istinitoj_prici-delfin_de_vigan_v.jpg"
            raiting={5}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
