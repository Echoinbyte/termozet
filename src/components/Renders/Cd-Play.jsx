import Prompt from '../Prompt'

function Play() {
  return (
    <>
      <p>Type play/.. to return in normal position</p>
      <Prompt placeholder="&rarr; /easter" value="play/" cd="/play" />
    </>
  )
}

export default Play