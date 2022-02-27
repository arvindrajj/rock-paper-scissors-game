import styled from 'styled-components'

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  @media all and (max-height: 468px) {
    height: 400px;
  }
`
export const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media all and (max-height: 468px) {
    height: 400px;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  max-height: 120px;
  max-width: 130px;
`

export const ResultPara = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
`

export const CustomButton = styled.button`
  width: 140px;
  height: 39px;
  color: #223a5f;
  background-color: #ffffff;
  border: none;
  border-radius: 6px;
  font-family: 'Bree Serif';
  cursor: pointer;
`
