import ForgotPass from '../components/forgotPassword/ForgotPass';
import ResetPass from '../components/forgotPassword/ResetPass';

const ForgotPassword = () => {
	const cookie = false;
	return <>{!cookie ? <ForgotPass /> : <ResetPass />}</>;
};

export default ForgotPassword;
