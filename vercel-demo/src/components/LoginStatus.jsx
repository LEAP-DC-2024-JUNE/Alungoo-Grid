const LoginStatus = ({ status }) => {
  // let status = true;
  return <div>{status ? <div>Loggedin</div> : <div>Please Log In</div>
  </div>;
};
export default LoginStatus;
