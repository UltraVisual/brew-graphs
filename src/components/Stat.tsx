import * as React from 'react';
import IStat from '../interface/IStat';

interface IBodyProps {
    data: IStat
}

class Stat extends React.Component<IBodyProps> {
    public render():JSX.Element {
        const { _id, gravity } = this.props.data;

        return (
            <div key={ _id }>
                <p>{ _id }</p>
                <p>{ gravity }</p>
            </div>
        )
    }
}

export default Stat;