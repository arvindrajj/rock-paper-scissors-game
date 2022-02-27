import {RiCloseLine} from 'react-icons/ri'

import {
  RulesButton,
  ReactPopup,
  PopupBgContainer,
  CloseButton,
  PopupImage,
} from './styledComponents'

const GameRulesPopup = () => (
  <ReactPopup trigger={<RulesButton type="button">RULES</RulesButton>} modal>
    {close => (
      <PopupBgContainer>
        <CloseButton type="button" onClick={close}>
          <RiCloseLine color="#000000" size="25" />
        </CloseButton>
        <PopupImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </PopupBgContainer>
    )}
  </ReactPopup>
)

export default GameRulesPopup
