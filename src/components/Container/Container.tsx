import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
    children: ReactNode;
}

const StyledContainer = styled.div`
    max-width: 1440px;
    width: 100vw;
    overflow: hidden;
`
export const Container = ({ children }: Props) => {
    return (
        <StyledContainer className="container">{children}</StyledContainer>
    )
}
