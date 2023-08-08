import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Carousel() {
    const carouselItems = [
        {
            id: 1,
            name: 'Item 1',
            offer: 'incl of offer',
            price: 'Rs 7999',
            image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
        },
        {
            id: 2,
            name: 'Item 2',
            offer: 'incl of offer',
            price: 'Rs 8999',
            image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
        },
        {
            id: 3,
            name: 'Item 3',
            offer: 'incl of offer',
            price: 'Rs 9999',
            image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
        },
        {
            id: 4,
            name: 'Item 4',
            offer: 'incl of offer',
            price: 'Rs 9999',
            image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
        },
        {
            id: 5,
            name: 'Item 5',
            offer: 'incl of offer',
            price: 'Rs 9999',
            image: 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
        },
        {
            id: 6,
            name: 'Item 6',
            offer: 'incl of offer',
            price: 'Rs 9999',
            image: '/static/images/cards/contemplative-reptile.jpg',
        },
        {
            id: 7,
            name: 'Item 7',
            offer: 'incl of offer',
            price: 'Rs 9999',
            image: '/static/images/cards/contemplative-reptile.jpg',
        },
        {
            id: 8,
            name: 'Item 8',
            offer: 'incl of offer',
            price: 'Rs 9999',
            image: '/static/images/cards/contemplative-reptile.jpg',
        },
        // Add more carousel items
    ];

    const itemsPerPage = 5;
    const totalSlides = Math.ceil(carouselItems.length / itemsPerPage);

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const nextSlide = () => {
        setCurrentSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlideIndex((prevSlideIndex) => (prevSlideIndex - 1 + totalSlides) % totalSlides);
    };

    const startItemIndex = currentSlideIndex * itemsPerPage;
    const endItemIndex = Math.min(startItemIndex + itemsPerPage, carouselItems.length);
    const visibleItems = carouselItems.slice(startItemIndex, endItemIndex);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                {visibleItems.map((item) => (
                    <Card key={item.id} sx={{
                        maxWidth: 245,
                        margin: '0 8px', 
                    }}>
                        <CardActionArea>
                            <CardMedia component="img" height="240" image={item.image} alt="green iguana" />
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                }}
                            >
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {item.name}
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="div" style={{ color: 'green' }}>
                                    {item.offer}
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    <span>from</span> <span>{item.price}</span>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
                <span className="prev-card" onClick={prevSlide}>
                    ❮
                </span>
                <span className="next-card" onClick={nextSlide}>
                    ❯
                </span>
            </div>

        </div>
    );
}
