import React from 'react';


class StorePicker extends React.Component {
    render(){
        return (
        <React.Fragment>
            <form className="store-selector">
                <h2> Please, enter the store</h2>
                <input type="text" placeholder="Store Name" required />
                <button type="submit">Visit Store </button>
            </form>
        </React.Fragment>
        )
    }
};

export default StorePicker;