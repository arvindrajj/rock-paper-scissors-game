import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const RulesButton = styled.button`
  width: 85px;
  height: 39px;
  color: #223a5f;
  background-color: #ffffff;
  border: none;
  border-radius: 6px;
  align-self: flex-end;
  cursor: pointer;
  margin-right: 10px;
`
export const ReactPopup = styled(Popup)`
  &-content {
    width: 40%;
    height: auto;
    min-height: 300px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 15px;
  }
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
  @media all and (max-width: 992px) {
    &-content {
      width: 80%;
    }
  }
  @media all and (max-height: 468px) {
    height: auto;
  }
`
export const PopupBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const CloseButton = styled.button`
  background-color: transparent;
  height: 20px;
  width: 20px;
  margin-bottom: 6px;
  border: none;
  align-self: flex-end;
  cursor: pointer;
`

export const PopupImage = styled.img`
  width: 100%;
  height: 80%;
`
