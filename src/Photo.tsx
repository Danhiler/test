import * as React from 'react';
import './Photo.css';

interface Iprops {
    imgUrl:any
}
class Photo extends React.Component<Iprops,{}> {

    public render() {
        return (
<img src={this.props.imgUrl} className="photo" />
    );
    }
}

export default Photo;