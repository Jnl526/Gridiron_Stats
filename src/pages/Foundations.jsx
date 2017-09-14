import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Divider, Image } from "semantic-ui-react";
import "./Foundations.scss";
import srcMADD from "assets/images/madd.png";
import srcNtlHgh from "assets/images/naturalHigh.png";
import srcASPCA from "assets/images/aspca.svg";
import srcSafeHorizon from "assets/images/safeHorizon.png";
import srcWings from "assets/images/wings.png";
import srcRAINN from "assets/images/rainn.svg";
import srcPrevent from "assets/images/prevent.png";



class Foundations extends Component {
	render() {
		return (


			<div className="Foundations-Div">
				<Grid verticalAlign='middle' columns={5} centered>
					<Grid.Row columns={3}>
						<Grid.Column>
							<Image className= "MADD-Image" src= {srcMADD}
								href="https://www.madd.org/donate-now/"
								target="_blank"
								centered spaced='right'
								shape='rounded'
								size= "large"
								spaced
							/>
							<h5>Zero deaths. Zero injuries. Zero families impacted by impaired driving.</h5>
							<p>Until there are No More Victims®, MADD will continue to speak up and fight for stronger laws. Because the truth is, the solution couldn’t be simpler. It all boils down to a single choice. A commitment to never driving impaired.</p>
							<Divider hidden />
						</Grid.Column>
							<Grid.Column>
							<Image className="SafeHorizon-Image"
								src= {srcSafeHorizon}
								href="https://www.safehorizon.org/donate/"
								target="_blank"
								size="large"
								centered
								shape='rounded'
								spaced='right'
							/>
							<h5>Safe Horizon is the nation’s leading victim assistance organization. Our mission is to provide support, prevent violence, and promote justice for victims of crime and abuse, their families and communities.</h5>
							<p>We envision a society free of family and community violence. We will lead the way by empowering victims of domestic violence, child abuse, sexual assault and human trafficking to move from crisis to confidence.</p>
							<Divider hidden />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns={3}>
						<Grid.Column>
							<Image className="Natural-High-Image"
								src= {srcNtlHgh}
								href="https://pages.donately.com/naturalhigh/donate"
								target="_blank"
								centered spaced='bottom'
								shape='rounded'
								size="large"
								spaced='bottom'
							/>
							<h5>Our mission is to inspire and empower youth to find their Natural High and develop skills and courage to live life well.</h5>
							<p>Natural High is a 501(c)(3) nonprofit organization and relies on the generosity of individuals, corporations and foundations to help change culture and spread a message that it’s cooler to say yes to a natural high and no to drugs.</p>
							<Divider hidden />
						</Grid.Column>
						<Grid.Column>
							<Image className="ASPCA-Image"
								src= {srcASPCA}
								href="https://secure.aspca.org/donate/donate-201709-t1-p1"
								target="_blank"
								centered spaced='bottom'
								shape='rounded'
								spaced
							/>
							<h5>The ASPCA provides effective means for the prevention of cruelty to animals throughout the United States.</h5>
							<p>The American Society for the Prevention of Cruelty to Animals® (ASPCA®) was the first humane society to be established in North America and is, today, one of the largest in the world.</p>
							<Divider hidden />
						</Grid.Column>
						<Grid.Column>
							<Image className="WINGS-Image"
								src= {srcWings}
								href="https://www.coloradogives.org/index.php?section=organizations&action=newDonation&fwID=24298"
								target="_blank"
								size='medium'
								centered spaced='bottom'
								shape='rounded'
								spaced
							/>
							<h5>WINGS breaks the cycle and heals the wounds of childhood sexual abuse by providing education, advocacy and support to adult survivors, providers and communities.</h5>
							<p>Specifically, WINGS works to connect survivors, loved ones, providers and communities with the resources they need to speak about, heal from and thrive beyond CSA trauma, to live their fullest, healthiest lives.</p>
 						<Divider hidden />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns={2}>
						<Grid.Column>
							<Image src= {srcRAINN}
								href="https://donate.rainn.org/"
								target="_blank"
								size= 'medium'
								centered spaced='bottom'
								shape='rounded'
							/>
							<h5> RAINN carries out programs to prevent sexual violence, help survivors, and ensure that perpetrators are brought to justice.</h5>
							<p>RAINN (Rape, Abuse & Incest National Network) is the nation's largest anti-sexual violence organization. RAINN created and operates the National Sexual Assault Hotline (800.656.HOPE, online.rainn.org y rainn.org/es) in partnership with more than 1,000 local sexual assault service providers across the country and operates the DoD Safe Helpline for the Department of Defense.</p>
							<Divider hidden />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>


		);
	}
}
export default Foundations;
