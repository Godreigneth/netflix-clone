import React, { useState, useContext, createContext } from 'react';
import {
    Container,
    Frame,
    Title,
    Item,
    Inner,
    Header,
    Body,
} from './styles/accordion';


const ToggleContext = createContext();


export default function Accordion({ children, ...restProops }) {
    return (
        <Container {...restProops}>
            <Inner>
                {children}
            </Inner>
        </Container>
    );
}

Accordion.Title = function AccordionTitle({ children, ...restProops }) {
    return (
        <Title {...restProops}>
            {children}
        </Title>
    );
};


Accordion.Frame = function AccordionFrame({ children, ...restProops }) {
    return (
        <Frame {...restProops}>
            {children}
        </Frame>
    );
};


Accordion.Item = function AccordionItem({ children, ...restProops }) {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProops}>{children}</Item>
        </ToggleContext.Provider>
    );
};


Accordion.Header = function AccordionHeader({ children, ...restProops }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    return (
        <Header
            onClick={() => setToggleShow((toggleShow) => !toggleShow)}
            {...restProops}>
            {children}
        </Header>
    );
};

Accordion.Body = function AccordionBody({ children, ...restProops }) {
    const { toggleShow } = useContext(ToggleContext);

    return toggleShow ?
        <Body {...restProops}>
            {children}
        </Body> : null;
};