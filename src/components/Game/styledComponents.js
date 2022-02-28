import styled from 'styled-components'

export const GameContainer = styled.div`
  min-height: 100%;
  padding-bottom: 20px;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BodyContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`

export const ScoreBoardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  background-color: transparent;
  width: 100%;
`
export const ParaContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Para = styled.h1`
  font-family: 'Bree Serif';
  font-size: 20px;
  color: #ffffff;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 140px;
  border-radius: 10px;
  background-color: #ffffff;
`

export const ScorePara = styled.p`
  font-family: 'Bree Serif';
  font-size: 20px;
  color: #223a5f;
  padding-top: 15px;
`

export const Score = styled.p`
  color: #000000;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 700;
`

export const ImagesContainer = styled.div`
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
export const ListContainer = styled.div`
  width: 280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ImageButton = styled.button`
  background-color: transparent;
  height: 100%;
  width: 100%;
  max-height: 120px;
  max-width: 130px;
  margin-right: 10px;
  margin-bottom: 15px;
  border: none;
  cursor: pointer;
`
export const Image = styled.img`
  height: 100%;
  width: 100%;
  max-height: 120px;
  max-width: 130px;
`
