import React, { useEffect, useState } from 'react'
import DinoCards from '../DinoCards'
import DinoInfos from '../DinoInfos'
import './AttractionsSection.css'

import { TbMeat } from "react-icons/tb";
import { RiMapPinTimeLine } from "react-icons/ri";
import { IoEarthSharp } from "react-icons/io5";





const AttractionsSection = () => {
    const data = [
        {
            name: 'TYRANNOSAURUS REX',
            iconMeal: <TbMeat />,
            meal: 'CARNÍVORO',
            iconPeriod: <RiMapPinTimeLine />,
            period: 'CRETACEO',
            iconLocation: <IoEarthSharp />,
            location: 'AMÉRICA DO NORTE',
            text: `O Tyrannosaurus Rex, frequentemente abreviado como T. REX, foi uma das espécies de dinossauros mais famosas e temíveis do final do período Cretáceo, há aproximadamente 68 a 66 milhões de anos. Era um predador bípede e carnívoro que habitava a região que hoje conhecemos como América do Norte. O T. rex possuía uma cabeça grande, equilibrada por uma cauda longa e robusta. Seus membros anteriores eram pequenos em comparação com os membros posteriores musculosos, e suas mandíbulas eram equipadas com grandes dentes serrilhados, indicando sua adaptação para a caça de presas.`,
            image: '/imagens/tyranossauro.jpg'
        },

        {
            name: 'VELOCIRAPTOR MONGOLIENSIS',
            iconMeal: <TbMeat />,
            meal: 'CARNÍVORO',
            iconPeriod: <RiMapPinTimeLine />,
            period: 'CRETACEO',
            iconLocation: <IoEarthSharp />,
            location: 'ÁSIA',
            text: `O Velociraptor foi um pequeno dinossauro terópode que viveu durante o período Cretáceo, 
                    aproximadamente entre 85 e 80 milhões de anos atrás. Pertencente à família Dromaeosauridae, 
                    o Velociraptor era caracterizado por seu corpo ágil, penas emplumadas e garras curvas e afiadas nos pés. 
                    Seu nome, "Velociraptor", significa "ladrão veloz".
                    Era um predador carnívoro e bipede, provavelmente caçando em grupos para derrubar presas maiores. 
                    Apesar de sua fama adquirida através da cultura popular, 
                    é importante notar que o Velociraptor era significativamente menor do que muitas representações cinematográficas sugerem, 
                    com uma altura média de cerca de 0,5 metros na altura do quadril e um comprimento total de cerca de 2 metros.
                    Fósseis de Velociraptor foram encontrados principalmente na Mongólia e na China. 
                    Sua descoberta e estudo contribuíram significativamente para nossa compreensão da evolução e comportamento dos dinossauros terópodes.`,
            image: '/imagens/velociraptor.jpg'
        },

        {   
            name: 'TRICERATOPS HORRIDUS',
            iconMeal: <TbMeat />,
            meal: 'HERBÍVORO',
            iconPeriod: <RiMapPinTimeLine />,
            period: 'CRETACEO',
            iconLocation: <IoEarthSharp />,
            location: 'AMÉRICA DO NORTE',
            text: `O Triceratops foi um dinossauro herbívoro que viveu durante o final do período Cretáceo, 
                    cerca de 68 a 66 milhões de anos atrás. 
                    Ele pertencia à família dos ceratopsídeos e é conhecido por suas distintas três cristas no topo do crânio, 
                    daí o nome "Triceratops", que significa "rosto com três chifres". 
                    Esses chifres eram utilizados principalmente para defesa contra predadores e, 
                    possivelmente, em rituais de exibição entre os próprios Triceratops.
                    O Triceratops era um quadrúpede robusto, com um corpo grande e pesado. 
                    Sua cabeça era alongada, com um bico córneo na parte frontal, semelhante ao bico de um papagaio. 
                    A função exata desses bicos ainda é objeto de estudo, 
                    mas acredita-se que eram utilizados para arrancar folhas e ramos de plantas.`,
            image: '/imagens/triceratops.jpg'
        }
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
        <div className='DinoContainer'>
            <h2>ATRAÇÕES</h2>
            <div className='DinoContainer'>
                {windowWidth >= 1000 ? (
                    <>
                        {data.map(( item, index ) => (
                            <div className='DinoInfo' key={index}>
                                {index % 2 === 0 ? (
                                    <>
                                        <DinoCards 
                                            image={item.image}
                                            name={item.name}
                                            iconMeal={item.iconMeal}
                                            meal={item.meal}
                                            iconPeriod={item.iconPeriod}
                                            period={item.period}
                                            iconLocation={item.iconLocation}
                                            location={item.location}
                                        />
                                        <div className='DinoInfoContainer'>
                                            <p>{item.text}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <DinoInfos text={item.text} />
                                        <DinoCards
                                            image={item.image}
                                            name={item.name}
                                            iconMeal={item.iconMeal}
                                            meal={item.meal}
                                            iconPeriod={item.iconPeriod}
                                            period={item.period}
                                            iconLocation={item.iconLocation}
                                            location={item.location}
                                        />
                                    </>
                                )}
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {data.map(( item, index ) => (
                            <div className='DinoInfo' key={index}>
                                <DinoCards/>
                                <DinoInfos text={item.text} />
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default AttractionsSection