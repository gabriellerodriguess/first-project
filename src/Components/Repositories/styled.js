import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`
export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`
export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
`
export const ListItem = styled.li`
    margin: .5rem 0;
    background-color: #3A3A3A;
    color: #FFF;
    font-size: 3rem;
`

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #3A3A3A;
    color: #FFF;
    font-weigth: bold;
    padding: .5rem 0;
    text-decoration: none;
`