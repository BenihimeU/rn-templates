import React from 'react';

class Photo extends React.Component {
    imageRef = React.createRef();
    state = {
        spans: 0
    };
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    }
    render() {
        const { urls: { thumb }, alt_description } = this.props.photo;
        return <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
            <img
                ref={this.imageRef}
                className="ui small image"
                style={
                    {
                        width: '100px',
                    }
                }
                alt={alt_description}
                src={thumb} />
        </div>
    }
}

export default Photo;