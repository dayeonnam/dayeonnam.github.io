import styled from "styled-components";

export const NavContainer = styled.div`
    width : 100%;
    display: flex;
    flex-direction:column;
    justify-content: space-around;

    @media screen and (max-width: 500px) {
        .yourClass {
            display: none;
        }
    }
`;

export const NavElement = styled.div`
    width: 30%;
    
`;