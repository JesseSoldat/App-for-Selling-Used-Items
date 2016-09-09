let navBar = function(){
	return {
		restrict: 'E',
		scope: true,
		template: `
		<div>
			<nav>
				<div>
					<ul>
						<li><a href="#/dash">Dash</a></li>
						<li><a href="#/login">Login</a></li>
						<li><a href="#/register">Register</a></li>
					</ul>
				</div>

				<div ng-show="{{dashButton}}">
					<button>Edit</button>
					<button>Delete</button>
				</div>
				<div ng-show="{{profileButton}}">
					<button>Edit</button>
					<button>Delete</button>
				</div>
				<hr>
			</nav>
		</div>

		`
	}

};
navBar.$inject = [];
export default navBar;

