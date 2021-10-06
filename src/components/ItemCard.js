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
            this.setState({
                editActive: false
            });
        }
        else if (event.detail === 2) {
            this.handleToggleEdit(event);
            
        }
    }
    handleToggleEdit = (event) => {
        this.state.text = this.props.itemName
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
        this.props.renameItemCallback(this.props.itemKey, textValue);
        this.handleToggleEdit();
    }
    handleDragStart = (event) => {
        this.state.text = this.props.itemName
        this.setState({
            editActive: false
        })
      event.dataTransfer.setData("key", this.props.itemKey)
    }
    handleDragOver = (event) => {
        event.preventDefault();
        event.target.classList.add("top5-item-dragged-to");
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        event.target.classList.remove("top5-item-dragged-to");
    }
    handleDrop = (event) => {
        event.preventDefault();
        let oldKey = event.dataTransfer.getData("key");
        let newKey = event.target.id.substring(10);   
        this.props.swapItemCallback(oldKey, newKey);
        event.target.classList.remove("top5-item-dragged-to");
    }
    getKey() {
        return this.itemKey;
    }

    render() {
        const { currentList, itemKey, itemName} = this.props;

        if (this.state.editActive) {
            return (
                <div
                    id={'top5-item-' + itemKey}
                    
                    className={'top5-item'}>
                    
                    <input autoFocus
                    id={"item-" + itemKey}
                    type='text'
                    currentList = {currentList}
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    onDragStart={this.handleDragStart}
                    onDragOver={this.handleDragOver}
                    onDragLeave = {this.handleDragLeave}
                    onDrop = {this.handleDrop}
                    defaultValue={itemName}
                
                />
                </div>)
        }
        else {
            return (
                <div
                    id={'top5-item-' + itemKey}
                    currentList = {currentList}
                    onClick={this.handleClick}
                    onDragStart = {this.handleDragStart}
                    onDragOver={this.handleDragOver}
                    onDrop = {this.handleDrop}
                    onDragLeave = {this.handleDragLeave}
                    draggable = "true"
                    className={'top5-item'}>
                    {itemName}
                </div>
            );
        }
    }
}