import { Container } from './styles'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input = (props: Props): JSX.Element => (
  <Container>
    <input {...props} />
    <label>{props.title}</label>
  </Container>
)

export default Input
