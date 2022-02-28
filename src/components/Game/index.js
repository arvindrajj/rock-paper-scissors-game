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
  ImageButton,
  Image,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

export default class Game extends Component {
  state = {
    score: 0,
    playerChoice: {},
    opponentChoice: {},
    isGameOver: false,
    gameResultText: '',
  }

  getResult = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  onTriggerGameResult = async yourChoice => {
    const {score} = this.state
    const randomNum = Math.floor(Math.random() * choicesList.length)
    const randomChoice = choicesList[randomNum]
    const result = this.getResult(yourChoice, randomChoice)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    await this.setState({
      playerChoice: yourChoice,
      opponentChoice: randomChoice,
      isGameOver: true,
      gameResultText: result,
      score: newScore,
    })
  }

  playAgain = () => {
    this.setState({isGameOver: false})
  }

  render() {
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
              <Para>
                ROCK
                <br /> PAPER <br /> SCISSORS
              </Para>
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
                <ImageButton
                  data-testid="rockButton"
                  type="button"
                  onClick={() => this.onTriggerGameResult(choicesList[0])}
                >
                  <Image
                    src={choicesList[0].imageUrl}
                    alt={choicesList[0].id}
                    key={choicesList[0].id}
                  />
                </ImageButton>
                <ImageButton
                  data-testid="scissorsButton"
                  type="button"
                  onClick={() => this.onTriggerGameResult(choicesList[1])}
                >
                  <Image
                    src={choicesList[1].imageUrl}
                    alt={choicesList[1].id}
                    key={choicesList[1].id}
                  />
                </ImageButton>
                <ImageButton
                  data-testid="paperButton"
                  type="button"
                  onClick={() => this.onTriggerGameResult(choicesList[2])}
                >
                  <Image
                    src={choicesList[2].imageUrl}
                    alt={choicesList[2].id}
                    key={choicesList[2].id}
                  />
                </ImageButton>
              </ListContainer>
            </ImagesContainer>
          )}
        </BodyContainer>
        <GameRulesPopup />
      </GameContainer>
    )
  }
}
