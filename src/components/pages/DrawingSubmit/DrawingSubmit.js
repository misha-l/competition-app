import React from "react";
import "./DrawingSubmit.scss";
import Pagecontainer from "../../Pagecontainer/Pagecontainer";

class DrawingSubmit extends React.Component {
  render() {
    return (
      <Pagecontainer>
        <div className="drawingSendForm">
          <form onSubmit="">
            <h1>Изпрати Рисунка</h1>
            <div className="author">
              <label>Име:</label>
              <input type="text" name="author" />
            </div>
            <div className="age">
              <label>Години:</label>
              <input type="number" name="age" min={1} max={12} />
            </div>
            <div className="place">
              <label>Населено място:</label>
              <input type="text" name="place" />
            </div>
            <br />
            <div className="insertpic">
              <label>Прикачи фаил:</label>
              <input type="file" name="insertpic" />
              <span></span>
            </div>
            <div className="description">
              <label>Описание:</label>
              <textarea
                name="awesome"
                placeholder="Напишете няколко думи, които описват/представят рисунката ви."
                rows={8}
                cols={40}
                defaultValue={""}
              />
            </div>

            <input type="submit" value="Изпрати" className="submmitbutton" />
          </form>
        </div>
      </Pagecontainer>
    );
  }
}

export default DrawingSubmit;
