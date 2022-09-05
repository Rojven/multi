import { useState, useEffect } from 'react';
import wa_icon from '../assets/icons/whatsapp.svg';
import send_icon from '../assets/icons/send.svg';

const Button = ({ photo_1, name_1, position_1, number_1, photo_2, name_2, position_2, number_2, photo_3, name_3, position_3, number_3 }) => {

    const [onShown, setOnShown] = useState(false);
    const [firstLink, setFirstLink] = useState(false);
    const [secondLink, setSecondLink] = useState(false);
    const [thirdLink, setThirdLink] = useState(false);

    useEffect(() => {
        setFirstLink(false); 
        setSecondLink(false);
        setThirdLink(false);
        if (photo_1.length > 0 && name_1.length > 0 && position_1.length > 0 && number_1.length > 0) {
            setFirstLink(true)
        }
        if (photo_2.length > 0 && name_2.length > 0 && position_2.length > 0 && number_2.length > 0) {
            setSecondLink(true)
        }
        if (photo_3.length > 0 && name_3.length > 0 && position_3.length > 0 && number_3.length > 0) {
            setThirdLink(true)
        }
    }, [photo_1, name_1, position_1, number_1, photo_2, name_2, position_2, number_2, photo_3, name_3, position_3, number_3])
    
    const links = [
        {photo: photo_1, name: name_1, position: position_1, number: number_1, shown: firstLink},
        {photo: photo_2, name: name_2, position: position_2, number: number_2, shown: secondLink},
        {photo: photo_3, name: name_3, position: position_3, number: number_3, shown: thirdLink},
    ]
    return (
        <>
            <div className='widget' style={{display: `${onShown ? 'block' : 'none'}`}}>
                <div className='widget__header'>
                    <div className='flex'>
                        <img src={wa_icon} alt="wa_icon" className='widget-button-icon'/>
                        <div className='grid'>
                            <h2>Start a Conversation</h2>
                            <p>Contact us below</p>
                        </div>
                    </div>
                    <button>&times;</button>
                </div>
                <div className='widget__body'>
                    <ul>
                        {links.map(({ photo, name, position, number, shown }, i) => 
                            <li key={i} style={{display: `${shown ? 'block' : 'none'}`}}>
                                <a href={`https://wa.me/${number}`} target="_blank" rel="noreferrer">
                                    <div className='flex'>
                                        <img src={photo} alt="person_1" className='widget__body-person'/>
                                        <div className='grid'>
                                            <h3>{name}</h3>
                                            <p>{position}</p>
                                        </div>
                                    </div>
                                    <img src={send_icon} alt="wa_icon" className='widget__body-icon'/>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <button className='widget-button' onClick={() => setOnShown(!onShown)}>
                {onShown ? (
                    <span style={{fontSize: '33px', color: 'white'}}>&times;</span>
                ) : (
                    <img src={wa_icon} alt="wa_icon" className='widget-button-icon'/>
                )}   
            </button>
        </>
    )
}

export default Button