import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import './App.css';
import Chart from './components/Chart';

const getStats = gql`
	{
		stats {
			temperature
			gravity
			angle
			_id
			timeStamp
			ID
		}
	}
`

class App extends React.Component {
	public render():JSX.Element {
		return (
			<Query query={ getStats }>
				{({ loading, error, data }) => {
					if (loading) {
						return 'Loading...';
					}
					if (error) {
						return `Error! ${ error }`;
					}
		
					return (
						<div>
							<Chart data={ data.stats } xaxis="timeStamp" yaxis="angle" range={ [85, 88] }/>
							<Chart data={ data.stats } xaxis="timeStamp" yaxis="temperature" range={ [20, 25] }/>
						</div>
					);
				}}
			</Query>
		);
	}
}

export default App;
