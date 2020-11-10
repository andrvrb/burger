import React from 'react';
import styled from 'styled-components';

const TopingWrap = styled.div`
    min-width: 500px;
    margin: 0 auto;
    column-count: 2;
    column-gap: 15px;    
`;

const TopingLabel = styled.label`
    cursor: pointer;    
    display: block;
`;

const TopingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

export function Toppings({toppings, checkToppings}) {
    return (
        <>
            <h3>Добавки</h3>
            <TopingWrap>
                {toppings.map((item, i) => (
                    <TopingLabel key={i}>
                    <TopingCheckbox 
                        type="checkbox" 
                        checked={item.checked} 
                        onChange={() => checkToppings(i)}/>
                        {item.name}
                </TopingLabel>  
                ))}                          
            </TopingWrap>
        </>

    )
}