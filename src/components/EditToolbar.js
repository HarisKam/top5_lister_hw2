import React from "react";

export default class EditToolbar extends React.Component {
    render() {
        const {
            undo,
            redo,
            closeList
        } = this.props;
        return (
            <div id="edit-toolbar">
                <div 
                    onClick={undo}
                    id='undo-button'
                    className="top5-button">
                        &#x21B6;
                </div>
                <div
                    onClick={redo}
                    id='redo-button'
                    className="top5-button">
                        &#x21B7;
                </div>
                <div
                    onClick={closeList}
                    id='close-button'
                    className="top5-button">
                        &#x24E7;
                </div>
            </div>
        )
    }
}