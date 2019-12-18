import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navigation.css';

class NavButton extends Component {
    static defaultProps = {
        text: '',
        pages: []
    };

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.checkClick = this.checkClick.bind(this);
    }

    checkClick() {
        if (this.props.pages.length > 0) {
            if (!this.state.clicked) {
                this.setState({
                    clicked: true
                })
            }
        }

    }


    render() {
        const { text, pages } = this.props;
        const { clicked } = this.state;
        return (
            <div onClick={this.checkClick}>
                {clicked ? pages.map((page, i) => {
                        return <Link to={page.page} key={i}>{page.title}</Link>
                })
                    : <div>{text}</div>
                }
            </div>
        );
    }
}

export default NavButton;
