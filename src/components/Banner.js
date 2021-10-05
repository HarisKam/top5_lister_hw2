import React from "react";
import EditToolbar from "./EditToolbar";

export default class Banner extends React.Component {
    render() {
        const { title, undo, redo} = this.props;
        return (
            <div id="top5-banner">
                {title}
                <EditToolbar undo = {undo} redo = {redo}/>
            </div>
        );
    }
}