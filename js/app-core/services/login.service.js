let LoginService = function(){
	this.login = login;
	this.register = register;

	function login(user){
		firebase.auth().signInWithEmailAndPassword(user.logEmail, user.logPass).catch(function(error){
			console.log(error.message);
		});
	}
	function register(user){
		firebase.auth().createUserWithEmailAndPassword(user.regEmail, user.regPass).catch(function(error){
			console.log(error.message);
		});
	}

};
LoginService.$inject = [];
export default LoginService;