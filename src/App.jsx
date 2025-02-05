import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import html2canvas from 'html2canvas'; 

function App() {
  const [background, setBackground] = useState('url(src/assets/background-1.webp)');
  const [selectedLink, setSelectedLink] = useState('src/assets/background-1.webp');
  
  const [title, setTitle] = useState('Name Here');
  const [text1, setText1] = useState('Lorem Ipsum dolor sit amet, consectetur adipiscing!');
  const [preTitle, setPreTitle] = useState('Lorem Ipsum');
  const [date, setDate] = useState('December 25th');
  const [local, setLocal] = useState('Azambuja Church');
  const [obs, setObs] = useState('Note.: Lorem Ipsum dolor sit amet, consectetur adipiscing!');

  const [titleColor, setTitleColor] = useState('black');
  const [text1Color, setText1Color] = useState('black');
  const [preTitleColor, setPreTitleColor] = useState('black');
  const [dateColor, setDateColor] = useState('black');
  const [localColor, setLocalColor] = useState('black');
  const [obsColor, setObsColor] = useState('black');

  const [newTitle, setNewTitle] = useState('');
  const [newText1, setNewText1] = useState('');
  const [newPreTitle, setNewPreTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newObs, setNewObs] = useState('');

  const changeBackground = (image) => {
    setBackground(`url(${image})`);
    setSelectedLink(image);
  };

  const handleTitleChange = (event) => setNewTitle(event.target.value);
  const handleText1Change = (event) => setNewText1(event.target.value);
  const handlePreTitleChange = (event) => setNewPreTitle(event.target.value);
  const handleDateChange = (event) => setNewDate(event.target.value);
  const handleLocalChange = (event) => setNewLocation(event.target.value);
  const handleObsChange = (event) => setNewObs(event.target.value);

  const handleTitleColorChange = (event) => setTitleColor(event.target.value);
  const handleText1ColorChange = (event) => setText1Color(event.target.value);
  const handlePreTitleColorChange = (event) => setPreTitleColor(event.target.value);
  const handleDateColorChange = (event) => setDateColor(event.target.value);
  const handleLocalColorChange = (event) => setLocalColor(event.target.value);
  const handleObsColorChange = (event) => setObsColor(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTitle.trim() !== '') setTitle(newTitle);
    if (newText1.trim() !== '') setText1(newText1);
    if (newPreTitle.trim() !== '') setPreTitle(newPreTitle);
    if (newDate.trim() !== '') setDate(newDate);
    if (newLocation.trim() !== '') setLocal(newLocation);
    if (newObs.trim() !== '') setObs(newObs);
    
    setNewTitle('');
    setNewText1('');
    setNewPreTitle('');
    setNewDate('');
    setNewLocation('');
    setNewObs('');
  };

  const downloadImage = () => {
    const element = document.querySelector('.invite'); 
    html2canvas(element).then((canvas) => {
      const image = canvas.toDataURL('image/png'); 
      const link = document.createElement('a'); 
      link.href = image;
      link.download = 'invite.png'; 
      link.click();
    });
  };

  return (
    <>
      <div className="row">
        <div className='col-xl-8 col-lg-12 col-md-12 col-sm-12'>
          <div className='row'>
            <div className='col-xl-2 col-lg-2 col-md-12 col-sm-12 select-image'>
              <a href='/' onClick={() => changeBackground('src/assets/background-1.webp')}>
                <img 
                  src='src/assets/background-1.webp' 
                  alt="Background 1"
                  style={{ border: selectedLink === 'src/assets/background-1.webp' ? '2px solid darkgreen' : 'none' }}
                />
              </a>
              <a href='/' onClick={() => changeBackground('src/assets/background-2.webp')}>
                <img 
                  src='src/assets/background-2.webp' 
                  alt="Background 2"
                  style={{ border: selectedLink === 'src/assets/background-2.webp' ? '2px solid darkgreen' : 'none' }}
                />
              </a>
              <a href='/' onClick={() => changeBackground('src/assets/background-4.webp')}>
                <img 
                  src='src/assets/background-4.webp' 
                  alt="Background 3"
                  style={{ border: selectedLink === 'src/assets/background-4.webp' ? '2px solid darkgreen' : 'none' }}
                />
              </a>
              <a href='/' onClick={() => changeBackground('src/assets/background-5.webp')}>
                <img 
                  src='src/assets/background-5.webp' 
                  alt="Background 3"
                  style={{ border: selectedLink === 'src/assets/background-5.webp' ? '2px solid darkgreen' : 'none' }}
                />
              </a>
            </div>
            <div className='class="col-xl-10 col-lg-10 col-md-12 col-sm-12"'>
              <div className='invite' style={{ backgroundImage: background }}>
                <p className='text1' style={{ color: text1Color }}>{text1}</p>
                <p className='pre-title' style={{ color: preTitleColor }}>{preTitle}</p>
                <p className='title' style={{ color: titleColor }}>{title}</p>
                <p className='date' style={{ color: dateColor }}>{date}</p>
                <p className='local' style={{ color: localColor }}>{local}</p>
                <p className='obs' style={{ color: obsColor }}>{obs}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-4 col-lg-12 col-md-12 col-sm-12'>
          <form onSubmit={handleSubmit}>
            {}
            <div className="form-group">
              <input 
                id="text1Input" 
                type="text" 
                value={newText1} 
                onChange={handleText1Change} 
                placeholder={text1} 
                className="form-control"
              />
              <input 
                id="text1ColorInput" 
                type="color" 
                onChange={handleText1ColorChange} 
                value={text1Color}
                className="form-control mt-2"
              />
            </div>

            <div className="form-group">
              <input 
                id="preTitleInput" 
                type="text" 
                value={newPreTitle} 
                onChange={handlePreTitleChange} 
                placeholder={preTitle} 
                className="form-control"
              />
              <input 
                id="preTitleColorInput" 
                type="color" 
                onChange={handlePreTitleColorChange} 
                value={preTitleColor}
                className="form-control mt-2"
              />
            </div>

            <div className="form-group">
              <input 
                id="titleInput" 
                type="text" 
                value={newTitle} 
                onChange={handleTitleChange} 
                placeholder={title} 
                className="form-control"
              />
              <input 
                id="titleColorInput" 
                type="color" 
                onChange={handleTitleColorChange} 
                value={titleColor}
                className="form-control mt-2"
              />
            </div>

            <div className="form-group">
              <input 
                id="dateInput" 
                type="text" 
                value={newDate} 
                onChange={handleDateChange} 
                placeholder={date} 
                className="form-control"
              />
              <input 
                id="dateColorInput" 
                type="color" 
                onChange={handleDateColorChange} 
                value={dateColor}
                className="form-control mt-2"
              />
            </div>

            <div className="form-group">
              <input 
                id="localInput" 
                type="text" 
                value={newLocation} 
                onChange={handleLocalChange} 
                placeholder={local} 
                className="form-control"
              />
              <input 
                id="localColorInput" 
                type="color" 
                onChange={handleLocalColorChange} 
                value={localColor}
                className="form-control mt-2"
              />
            </div>

            <div className="form-group">
              <input 
                id="obsInput" 
                type="text" 
                value={newObs} 
                onChange={handleObsChange} 
                placeholder={obs} 
                className="form-control"
              />
              <input 
                id="obsColorInput" 
                type="color" 
                onChange={handleObsColorChange} 
                value={obsColor}
                className="form-control mt-2"
              />
            </div>

            <button type="submit" className="btn btn-primary mt-3">Change</button>
          </form>
          <button onClick={downloadImage} className="btn btn-success mt-3">Download Invite as Image</button>
        </div>
      </div>
    </>
  );
}

export default App;
