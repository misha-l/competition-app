import React from "react";
import "./Home.scss";
import Pagecontainer from "../../components/layout/Pagecontainer/Pagecontainer";

const Home = () => {
  return (
    <div className="home-page">
      <Pagecontainer>
        <h1>
          <b>5</b>ТО Издание
        </h1>
        <h2>
          <i>
            на ежегодният конкурс за детска рисунака
            <br />
            на издателство ARTPOINT
            <br />
          </i>
          Тема за 2021:
          <br />
          "Приказни Герои"
        </h2>
        <p>
          Добре дошли в страницата на нашия ежегоден конкурс за детска рисунка.
          <br />
          Тази година всички деца до 12г. могат да ни изпратят рисукна на тема{" "}
          <b>"ПРИКАЗНИ ГЕРОИ"</b>.<br />
          Всеки участник може да изпраща само по една рисунка по темата.
          Препоръчителен формат на рисунките А4.
        </p>
        <p>
          От всички участници на 07.05.2021г. ще бъдат избрани 8 финалиста.
          Всички финалисти получават ваучери за пазаруване в нашите книжарници.
          След електронно гласуване на нашата страница от 07.05.2021г. до
          07.07.2021г. ще бъде избран 1-н победител, по чиято творба ще бъде
          илюстрирана и отпечатана детска книжка.
        </p>
        <p>
          <b>
            Не забравяйте да гласувате за нашите финалисти от 07.05.2021г. до
            07.07.2021г. на нашата страница.
          </b>
        </p>
        <p>Успех на всички участници</p>
        <a href="/finalists" className="redbutton">
          Гласувай за нашите финалисти
        </a>
      </Pagecontainer>
    </div>
  );
};

export default Home;
