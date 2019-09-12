import styled, { css } from "styled-components"
import media from "../../util/mediaQuery"

export const SlideShowWrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 5rem;
  transform: rotate(-20deg);
  width: 55%;
  height: 70%;

  z-index: 20;

  ${media(
    ["min-2000"],
    css`
      left: 10rem;
    `
  )}
`

export const ArrowSharedStyles = css`
  width: 100%;
  margin-top: 2rem;
  color: white;
  transform: rotate(0deg);
  transition: all 0.2s ease;

  user-select: none;
`
export const ArrowRight = css`
  ${ArrowSharedStyles}

  &:hover {
    margin-top: 1.6rem;
    filter: drop-shadow(0 0.5rem 0.5rem rgb(0, 0, 0, 0.2));
  }
`
export const ArrowLeft = css`
  ${ArrowSharedStyles}
  transform: rotate(180deg);

  &:hover {
    margin-top: 1.6rem;
    filter: drop-shadow(0 0.5rem 0.5rem rgb(0, 0, 0, 0.2));
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.div`
  width: 7rem;
  cursor: pointer;
  padding: 0.5rem;

  &:not(:last-child) {
    margin-right: 3rem;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: solid 6rem white;
  box-shadow: 2rem 2rem 10rem rgb(0, 0, 0, 0.2);

  z-index: 5;
`
