import {Component} from 'react'

import {
  GameResultContainer,
  ImagesContainer,
  ImageContainer,
  Para,
  Image,
  ResultPara,
  CustomButton,
} from './styledComponents'

export default class GameResultView extends Component {
  render() {
    const {playerChoice, opponentChoice, playAgain, gameResultText} = this.props
    return (
      <GameResultContainer>
        <ImagesContainer>
          <ImageContainer>
            <Para>YOU</Para>
            <Image src={playerChoice.imageUrl} alt="your choice" />
          </ImageContainer>
          <ImageContainer>
            <Para>OPPONENT</Para>
            <Image src={opponentChoice.imageUrl} alt="opponent choice" />
          </ImageContainer>
        </ImagesContainer>
        <ResultPara>{gameResultText}</ResultPara>
        <CustomButton type="button" onClick={playAgain}>
          PLAY AGAIN
        </CustomButton>
      </GameResultContainer>
    )
  }
}
