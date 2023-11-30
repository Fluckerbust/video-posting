import { useState } from "react";
import "./App.css";
import halls from "./assets/images/halls.png";
import orange from "./assets/images/orange.jpg";
import trees from "./assets/images/trees.png";
import wave from "./assets/images/wave.png";


function App() {
  const [serviceList, setServiceList] = useState([{ title: "", description: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { title: "", description: "" }]);
  };
  
  const urlCreator = (text) => {
    
    var site = text.replace(/ /g, "%20")
    
    return site
  }
  const images = [orange, halls, trees, wave]

  const randomImage = () => {
    let randomNumber = Math.floor(Math.random() * images.length)
    let chosen = images[randomNumber]
    return chosen
  }


  return (
    
    <form className="App" autoComplete="off">
      <div className="form-field">
        <label htmlFor="service">Video(s)</label>
        {serviceList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <input
                name="title"
                type="text"
                id="title"
                value={singleService.title}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
              <input
                name="description"
                type="text"
                id="description"
                value={singleService.description}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
              {serviceList.length - 1 === index && serviceList.length < 4 && (
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn"
                >
                  <span>Add a Service</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {serviceList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}

             
             
              
            </div>
            
          </div>
          
        ))}
        <h2>Posts:</h2><br/>
                {serviceList &&
          serviceList.map((singleService, index) => (
            <div key={index}>
              {singleService.title &&  <div className="postBG" style={{backgroundImage: `url(${randomImage()})`}}><div className="postOverlay"><h1>{singleService.title}</h1></div></div>}
              
            <br/>
              </div>
          ))}
      </div>
      <div className="output">
        <h2>Slack Post</h2>
        {serviceList &&
          serviceList.map((singleService, index) => (
            <ul key={index}>
              {singleService.title &&  <li>:film_projector: Title: <br/>&nbsp;&nbsp;&nbsp;{singleService.title}</li>}
              {singleService.description && <li>:information_source Description: <br/>&nbsp;&nbsp;&nbsp;{singleService.description}</li>}
              {<li>:link: URL: <br/>&nbsp;&nbsp;&nbsp;https://hpedemoportal.ext.hpe.com?name={urlCreator(singleService.title)}</li>}
            <br/>
              </ul>
            
          ))}

<h2>Yammer Post</h2>
        {serviceList &&
          serviceList.map((singleService, index) => (
            <ul key={index}>
              {singleService.title &&  <li>Title: <br/>&nbsp;&nbsp;&nbsp;{singleService.title}</li>}
              {singleService.description && <li>Description: <br/>&nbsp;&nbsp;&nbsp;{singleService.description}</li>}
              {<li>URL: <br/>&nbsp;&nbsp;&nbsp;https://hpedemoportal.ext.hpe.com?name={urlCreator(singleService.title)}</li>}
            <br/>
              </ul>
            
          ))}
      </div>
    </form>
    
  );
}

export default App;