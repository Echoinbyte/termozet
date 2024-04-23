import Prompt from '../Prompt'

function Social() {
  return (
    <>
      <p>Type social/.. to return in normal position</p>
      <Prompt placeholder="&rarr; /repo" value="social/" cd="/social" />
    </>
  )
}

export default Social