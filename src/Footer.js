import React, {Component} from 'react';
import './App.css';
import './main.css';
import $ from 'jquery';

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-sm-5 copyright"><p>Copyright © 2017 William Blythe<br/></p><p>Hosted By<a
							href="https://www.netlify.com/"> Netlify</a></p></div>
						<div className="col-sm-2 top"><span id="to-top" onClick={() => {
							$('html, body').animate({
								scrollTop: 0
							}, 500);
						}}>
							<i className="fa fa-chevron-up"
							   aria-hidden="true"></i></span>
						</div>
						<div className="col-sm-5 social">
							<ul>
								<li>
									<a href="https://github.com/willyb321/">
										<i className="fa fa-github" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="http://stackoverflow.com/users/6407432/willyb321">
										<i className="fa fa-stack-overflow" aria-hidden="true">

										</i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
