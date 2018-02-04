import React, {Component} from 'react';
import logo from './logo.svg';
import './css/dropdown.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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

            // var newChildren = React.Children.map(this.props.children, function(child) {
            //     return React.cloneElement(child, { foo: true })
            // });

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

            //&#709; down arrow
            //&#708; up arrow
            let toggleDisplay = classnames(
                'dropdown-content',
                {'dropdown-open': isOpened},
                {'dropdown-closed': !isOpened}
            );
//TODO: tryt o provide it as an image
            let arrow = isOpened ?
                <div className="arrow">&#709;</div> :
                <div className="arrow">&#708;</div>;

            return (
                <div className="dropdown-container">
                    <div className="bordershadow " onClick={this.onClick}>
                        {title}
                        {arrow}
                    </div>
                    <div className={toggleDisplay}>
                        {children}
                    </div>
                </div>
            );
        }
        catch (e) {
            return <div> Nothing to Add</div>
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


