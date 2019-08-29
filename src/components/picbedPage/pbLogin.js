import React, {Component} from 'react';

class pbLogin extends Component {
    render() {
        return (
            <div className="pbLogin">
                <form method="post" action="upload/post" enctype="multipart/form-data">
                    <input type="file" name="image" />
                    <button type="submit" name="upload">Upload</button>
                </form>
            </div>
        );
    }
}

export default pbLogin;