import React , {useState} from 'react'
import i2 from '../../../images/theware.png'
import i1 from '../../../images/fashiontv.jpg'
import i3 from '../../../images/capitaluxum.png'
import i4 from '../../../images/borntobein.png'
import i5 from '../../../images/dreamboat.png'
import i6 from '../../../images/itstheship.png'
import i7 from '../../../images/repons.jpg'
import i8 from '../../../images/shft.JPG'
import i9 from '../../../images/theware.png'
import ImgComp from './imgComp';
import './slider.css'

const Slider = () => {
    let SliderArr = [<ImgComp src={i1} />,
        <ImgComp src={i2} />,
        <ImgComp src={i3} />,
        <ImgComp src={i4} />,
        <ImgComp src={i5} />,
        <ImgComp src={i6} />,
        <ImgComp src={i7} />,
        <ImgComp src={i8} />,
        <ImgComp src={i9} />
    ]

    const [x,setX] = useState(0) ;
    const goLeft = () => {

        x === 0 ? setX( -100 * (SliderArr.length - 1)) : setX(x + 100);
    }
    
    const goRight = () => {

       x === -100 * (SliderArr.length - 1) ? setX(0): setX( x - 100)
    }

    return (
        <div className="slider">
            {SliderArr.map((item,index)=> {
                return (
                    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })}
            <div className="directions">
            <button id='goLeft' onClick={goLeft}>&larr; Prev</button>
            <button id='goRight' onClick={goRight} >Next &rarr;</button>
            </div>
        </div>
    )
}

export default Slider
