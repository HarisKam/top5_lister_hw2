import React from "react";
import ItemCard from "./ItemCard"

export default class Workspace extends React.Component {
    render() {
        const { currentList, 
                loadListCallback,
                renameItemCallback,
                swapItemCallback} = this.props;

            if (currentList == null) {
                return (
                    <div id="top5-workspace">
                        <div id="workspace-edit">
                            <div id="edit-numbering">
                                <div className="item-number">1.</div>
                                <div className="item-number">2.</div>
                                <div className="item-number">3.</div>
                                <div className="item-number">4.</div>
                                <div className="item-number">5.</div>
                            </div>
                        </div>
                    </div>
                        )
            } 
        return (
            <div id="top5-workspace">
                
                    <div id="edit-numbering">
                        <div className="item-number">1.</div> 
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    <div id= "edit-items">
                    <ItemCard
                            itemKey={0}
                            itemName={currentList.items[0]}
                            loadListCallback={loadListCallback}
                            renameItemCallback = {renameItemCallback}
                            swapItemCallback = {swapItemCallback}   
                            draggable = "true"
                        />
                        <ItemCard
                            itemKey={1}
                            itemName={currentList.items[1]}
                            loadListCallback={loadListCallback}
                            renameItemCallback = {renameItemCallback}
                            swapItemCallback = {swapItemCallback}
                            draggable = "true"
                        />
                        <ItemCard
                            itemKey={2}
                            itemName={currentList.items[2]}
                            loadListCallback={loadListCallback}
                            renameItemCallback = {renameItemCallback}
                            swapItemCallback = {swapItemCallback}
                            draggable = "true"
                        />
                        <ItemCard
                            itemKey={3}
                            itemName={currentList.items[3]}
                            loadListCallback={loadListCallback}
                            renameItemCallback = {renameItemCallback}
                            swapItemCallback = {swapItemCallback}
                            draggable = "true"
                        />
                        <ItemCard
                            itemKey={4}
                            itemName={currentList.items[4]}
                            loadListCallback={loadListCallback}
                            renameItemCallback = {renameItemCallback}
                            swapItemCallback = {swapItemCallback}
                            draggable = "true"
                        />
                        </div>
            
            </div>
        )
    }
}