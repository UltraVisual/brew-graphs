import * as React from 'react';
import { AxisDomain, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import IStat from '../interface/IStat';

interface IChartProps {
    data: [ IStat ],
    xaxis: string,
    yaxis: string,
    range: [ AxisDomain, AxisDomain ]
}

class Chart extends React.Component<IChartProps> {
    public render():JSX.Element {
        const { data, yaxis, xaxis, range } = this.props;

        return (
            <LineChart width={ 1800 } height={ 400 } data={ data } margin={{ top: 40, right: 20, bottom: 5, left: 70 }}>
                <Line type="monotone" dataKey={ yaxis} stroke="#8884d8"/>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey={ xaxis }/>
                <YAxis dataKey={ yaxis} domain={ range }/>
                <Tooltip />
            </LineChart>
        )
    }
}

export default Chart;
