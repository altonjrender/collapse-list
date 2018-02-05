import React, {Component} from 'react';
import './css/dropdown.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
    arrow,
    toggleDisplay
} from './helper';

export default class Collapse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: undefined,
            childrenCount: 0,
            isOpened: false
        };

        this.getCustomList = this.getCustomList.bind(this);
        this.handleOnLoad = this.handleOnLoad.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.handleOnLoad();
    }

    handleOnLoad() {
        //What happens if no children are passed
        this.setState({
            isOpened: this.props.autoOpen,
            children: this.getCustomList(),
            childrenCount: React.Children.count(this.props.children)
        });
    }

    onClick() {
        let toggle = !this.state.isOpened;
        this.setState({isOpened: toggle});
    }

//Function allows you to add additional css to children
    getCustomList() {
        try {
            let list = this.props.children;
            //TODO: what happens if no children are passed
            return React.Children.map(list, (child, i) => {
                return <div id={`${child.key}`}>{child} </div>
            });

        } catch (e) {
            return [];
        }
    }

    render() {
        try {
            const {title, children} = this.props;
            const {isOpened} = this.state;
//
//
//             let toggleDisplay = classnames(
//                 {'dropdown-content-open': isOpened},
//                 {'dropdown-content-closed': !isOpened}
//             );
// //TODO: tryt o provide it as an image
//             let arrow = isOpened ?
//                 <div className="icon">&#709;</div> :
//                 <div className="icon">&#708;</div>;
//             console.log(isOpened);
            return (
                <div className="dropdown-container">
                    <div className="title-icon-bordershadow title-icon-container" onClick={this.onClick}>
                        {title}
                        {arrow(isOpened)}
                    </div>
                    <div className={toggleDisplay(isOpened)}>
                        {children}
                    </div>
                </div>
            );
        }
        catch (e) {
            return <div/>
        }
    }
}

Collapse.defaultProps = {
    autoOpen: false,
    isOpened: false,
    title: 'Custom List',
    showIcon: true
};
Collapse.propTypes = {
    autoOpen: PropTypes.bool,
    callback: PropTypes.func,
    isOpened: PropTypes.bool,
    show: PropTypes.bool,
    title: PropTypes.node
};


