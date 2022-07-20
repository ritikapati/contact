import React from "react";

class AddContact extends React.Component {
    state={
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("Empty Fields, enter the values!!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""});
        
    };
    render() { 
        return (
            <div className="ui main">
                
                
                <h2>ADD CONTACTS</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <lable>Name</lable>
                        <input 
                            type="text" 
                            name ="name" 
                            placeholder="Name here" 
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">    
                        <lable>Email</lable>
                        <input 
                            type="email" 
                            name ="email" 
                            placeholder="Email here" 
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}
                            />
                    </div>
                    <button className="ui button black">Add</button>
                </form>
                
            </div>
        );
    }
}

export default AddContact;