import {Component} from 'react'
import GameRulesPopup from '../GameRulesPopup'
import GameResultView from '../GameResultView'

import {
  GameContainer,
  BodyContainer,
  ScoreBoardContainer,
  Para,
  ParaContainer,
  ScoreContainer,
  ScorePara,
  Score,
  ImagesContainer,
  ListContainer,
  ListItem,
  ImageButton,
  Image,
} from './styledComponents'

export default class Game extends Component {
  state = {
    score: 0,
    playerChoice: {},
    opponentChoice: {},
    isGameOver: false,
    gameResultText: '',
  }

  onTriggerGameResult = async yourChoice => {
    const {choicesList} = this.props
    console.log(yourChoice.dataTestId)
    const randomNum = Math.floor(Math.random() * choicesList.length)
    const randomChoice = choicesList[randomNum]
    if (yourChoice.id === 'PAPER' && randomChoice.id === 'ROCK') {
      await this.setState({gameResultText: 'YOU WON'})
      await this.setState(prevSate => ({score: prevSate.score + 1}))
    } else if (yourChoice.id === 'SCISSORS' && randomChoice.id === 'PAPER') {
      await this.setState({gameResultText: 'YOU WON'})
      await this.setState(prevSate => ({score: prevSate.score + 1}))
    } else if (yourChoice.id === 'ROCK' && randomChoice.id === 'SCISSORS') {
      await this.setState({gameResultText: 'YOU WON'})
      await this.setState(prevSate => ({score: prevSate.score + 1}))
    } else if (yourChoice.id === 'SCISSORS' && randomChoice.id === 'ROCK') {
      await this.setState({gameResultText: 'YOU LOSE'})
      await this.setState(prevSate => ({score: prevSate.score - 1}))
    } else if (yourChoice.id === 'ROCK' && randomChoice.id === 'PAPER') {
      await this.setState({gameResultText: 'YOU LOSE'})
      await this.setState(prevSate => ({score: prevSate.score - 1}))
    } else if (yourChoice.id === 'PAPER' && randomChoice.id === 'SCISSORS') {
      await this.setState({gameResultText: 'YOU LOSE'})
      await this.setState(prevSate => ({score: prevSate.score - 1}))
    } else if (yourChoice.id === randomChoice.id) {
      await this.setState({gameResultText: 'IT IS DRAW'})
    }

    await this.setState({playerChoice: yourChoice})
    await this.setState({opponentChoice: randomChoice})
    await this.setState({isGameOver: true})
  }

  playAgain = () => {
    this.setState({isGameOver: false})
  }

  render() {
    const {choicesList} = this.props
    const {
      score,
      playerChoice,
      opponentChoice,
      isGameOver,
      gameResultText,
    } = this.state
    return (
      <GameContainer>
        <BodyContainer>
          <ScoreBoardContainer>
            <ParaContainer>
              <Para>Rock Paper Scissors</Para>
            </ParaContainer>
            <ScoreContainer>
              <ScorePara>Score</ScorePara>
              <Score>{score}</Score>
            </ScoreContainer>
          </ScoreBoardContainer>
          {isGameOver ? (
            <GameResultView
              playerChoice={playerChoice}
              opponentChoice={opponentChoice}
              playAgain={this.playAgain}
              gameResultText={gameResultText}
            />
          ) : (
            <ImagesContainer>
              <ListContainer>
                {choicesList.map(each => (
                  <ListItem key={each.id}>
                    <ImageButton
                      data-testid={each.dataTestId}
                      type="button"
                      onClick={() => this.onTriggerGameResult(each)}
                    >
                      <Image src={each.imageUrl} alt={each.id} />
                    </ImageButton>
                  </ListItem>
                ))}
              </ListContainer>
            </ImagesContainer>
          )}
        </BodyContainer>
        <GameRulesPopup />
      </GameContainer>
    )
  }
}
