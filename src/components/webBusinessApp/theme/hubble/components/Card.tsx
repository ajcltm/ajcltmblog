import React from 'react';
import { StyledCard } from './styles/Card.styled';


interface Item {
    id: number;
    title: string;
    body: string;
    image: string;
}

interface CardProps {
    item: Item
}

export default function Card(props:CardProps) {
    return (
        <StyledCard layout={props.item.id % 2 === 0 ? 'row-reverse' : undefined}>
            <div>
                <h2>{props.item.title}</h2>
                <p>{props.item.body}</p>
            </div>
            <img src={`${props.item.image}`} alt="" />
        </StyledCard>
    )
}