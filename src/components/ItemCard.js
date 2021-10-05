import React from "react";

export default class ItemCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.itemName,
            editActive: false,
        }
    }
    handleClick = (event) => {
        if (event.detail === 1) {
            
        }
        else if (event.detail === 2) {
            this.handleToggleEdit(event);
        }
    }
    handleToggleEdit = (event) => {
        this.setState({
            editActive: !this.state.editActive
        });
    }
    handleUpdate = (event) => {
        this.setState({ text: event.target.value });
    }
    handleKeyPress = (event) => {
        if (event.code === "Enter") {
            this.handleBlur();
        }
    }
    handleBlur = () => {
        let textValue = this.state.text;
        console.log("ItemCard handleBlur: " + textValue);
        this.props.renameItemCallback(this.itemKey, textValue);
        this.handleToggleEdit();
    }

    render() {
        const { currentList, itemKey, itemName} = this.props;

        if (this.state.editActive) {
            return (
                <input
                    id={"item-" + itemKey}
                    className='top5-item'
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={itemName}
                />)
        }
        else {
            return (
                <div
                    id={'top5-item-' + itemKey}
                    onClick={this.handleClick}
                    className={'top5-item'}>
                    {itemName}
                </div>
            );
        }
    }
}