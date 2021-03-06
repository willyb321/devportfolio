import React, {Component} from 'react';
import './main.css';
import * as Scroll from 'react-scroll';

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="container">
					<div className="row">
						<div  className="col-sm-5 copyright"><p>Copyright © 2017 William Blythe<br/></p><p>Hosted By<a
							target="_blank" rel="noopener noreferrer" href="https://www.netlify.com/"> Netlify</a></p></div>
						<div className="col-sm-2 top"><span id="to-top" onClick={() => {
							Scroll.animateScroll.scrollToTop({
								duration: 500,
								delay: 0,
								smooth: true,
								spy: true,
								hashSpy: true
							});
						}}>
							<i className="fa fa-chevron-up"
							   aria-hidden="true"></i></span>
						</div>
						<div className="col-sm-5 social">
							<ul>
								<li>
									<a target="_blank" rel="noopener noreferrer" href="https://github.com/willyb321/">
										<i className="fa fa-github" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a target="_blank" rel="noopener noreferrer" href="http://stackoverflow.com/users/6407432/willyb321">
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
