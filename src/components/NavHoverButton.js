import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import '../styles/Navigation.css';

class NavHoverButton extends Component {
    static defaultProps = {
        text: ''
    };
    render() {
        const { text } = this.props;
        return (
            <div className="navButton">
                <span>{ text }</span>
            </div>
        );
    }
}

export default NavHoverButton;
