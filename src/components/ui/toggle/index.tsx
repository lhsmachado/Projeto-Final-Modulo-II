import * as S from './styles'

export default function Toggle() {
  return (
    <>
      <S.Form>
        <S.Field>
          <input
            type="radio"
            id="radio-one"
            name="switch-one"
            value="yes"
            checked
          />
          <label htmlFor="radio-one">Em alta</label>
          <input type="radio" id="radio-two" name="switch-one" value="no" />
          <label htmlFor="radio-two">Em baixa</label>
        </S.Field>
      </S.Form>
    </>
  )
}
