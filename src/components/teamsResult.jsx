import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { Doughnut } from "react-chartjs-2";
import "./teamsResult.scss";



class TeamsResult extends Component {
	render() {
		const { activeTeam1, activeTeam2 } = this.props;

		//Map over data to return an array of numbers as strings
		const teamData1String = activeTeam1.map((team) => {
			return (team.arrest_count);
		});

		//Map over previous array created and return a new array as numbers
		const teamData1 = teamData1String.map(Number);

		const teamLabel1 = activeTeam1.map((team) => {
			return team.Category;
		});

		const teamData2String = activeTeam2.map((team) => {
			return (team.arrest_count);
		});

		const teamData2 = teamData2String.map(Number);

		const teamLabel2 = activeTeam2.map((team) => {
			return team.Category.toString();
		});

		const data1 = {
			  datasets: [{
        data: teamData1,
				backgroundColor: ["#090300", "#3a3432","##4a4543","##5c5855","##807d7c","#a5a2a2","#d6d5d4","#f7f7f7","#db2d20","#e8bbd0","#fded02","#01a252","#b5e4f4","#01a0e4","#a16a94","#cdab53"],
				}],
				labels: teamLabel1,

	};

	const data2 = {
			datasets: [{
			data: teamData2,
			backgroundColor: ["#090300", "#3a3432","##4a4543","##5c5855","##807d7c","#a5a2a2","#d6d5d4","#f7f7f7","#db2d20","#e8bbd0","#fded02","#01a252","#b5e4f4","#01a0e4","#a16a94","#cdab53"],
		}],
			labels: teamLabel2,
};
		console.log(teamLabel1);
		return (
			<div className="Search-Results">
				<Grid columns = {2} padded>
					<Grid.Column>
						<Doughnut
							data = { data1 }
							width={800}
							height={400}
							options={{
							responsive: true,
	        		maintainAspectRatio: false
						}}
 						/>
					</Grid.Column>
					<Grid.Column>
						<Doughnut
							data = { data2 }
							width={800}
							height={400}
							options={{
							responsive: true,
		        	maintainAspectRatio: false
						}}
 						/>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

function mapStateToProps(state, props) {
	return {
		activeTeam1: state.teams.activeteam1,
		activeTeam2: state.teams.activeteam2,
};
}

export default connect(mapStateToProps) (TeamsResult);
