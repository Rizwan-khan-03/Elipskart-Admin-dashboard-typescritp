import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TemplateCarousel.css';

function TemplateCarousel({ templateData ,id}: any) {
    const navigate=useNavigate()
    const [slideIndex, setSlideIndex] = useState(1);
    useEffect(() => {
        showSlides(slideIndex);
    }, []);
    function plusSlides(n: any) {
        let newIndex = slideIndex + n;
        if (newIndex > templateData.length) {
            newIndex = 1;
        } else if (newIndex < 1) {
            newIndex = templateData.length;
        }
        setSlideIndex(newIndex);
        showSlides(newIndex);
    }
    function showSlides(n: any) {
        let i;
        let slides = document.getElementsByClassName("mySlides"+id);
        let slidesArray: HTMLElement[] = Array.from(slides) as HTMLElement[];
        if (slidesArray.length === 0) return;
        for (i = 0; i < slidesArray.length; i++) {
            slidesArray[i].style.display = "none";
        }
        slidesArray[n - 1].style.display = "block";
    }
    
    

    return (
        <div className='template_carousel'>
             <div className={`slideshow-container ${id}`}>
                {templateData.map((item: any, index: any) => (
                    <div key={index} className={`mySlides mySlides${id}`}style={{ display: index === (slideIndex - 1) ? "block" : "none" }}>
                        <img src={item?.Image} style={{ width: "100%", cursor: 'pointer', height: '100%' }} alt={`Slide ${index + 1}`}
                          onClick={() => navigate(item?.path)}
                        />
                        <div style={{ marginTop: "5px" }}>
                            <span className="prev" onClick={() => plusSlides(-1)}>❮</span>
                            <span className="next" onClick={() => plusSlides(1)}>❯</span>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default TemplateCarousel;

