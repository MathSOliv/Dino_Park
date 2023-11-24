import React, { useEffect, useState } from 'react'
import './AboutSection.css'
import AboutText from '../AboutText'
import AboutCards from '../AboutCards'

const AboutSection = () => {
    const data = [
        {text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', image: '/imagens/scientist.jpg'},
        {text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', image: '/imagens/ParkView.jpg'}
    ]

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return() => {
            window.removeEventListener('resize', handleResize)
        }

    }, []);

    return(
        <div>
            <h2>SOBRE O PARQUE</h2>
            <div className='AboutContainer'>
                {windowWidth >= 1000 ? (
                    <>
                        {data.map((item, index) => (
                            <div className='AboutInfo' key={index}>
                                {index % 2 === 0 ? (
                                    <>
                                        <AboutText text={item.text} />
                                        <AboutCards image={item.image} />
                                    </>
                                ):(
                                    <>
                                        <AboutCards image={item.image} />
                                        <AboutText text={item.text} />
                                    </>
                                )}
                            </div>
                        ))}
                    </>
                ):(
                    <>
                        {data.map((item, index) => (
                            <div className='AboutInfo' key={index}>
                                <AboutCards image={item.image} />
                                <AboutText text={item.text} />
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default AboutSection