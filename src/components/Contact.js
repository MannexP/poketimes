import React from 'react';

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    }, 2000)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, esse maiores. Aliquam repellendus reiciendis, nobis voluptate eos, sint ducimus, repudiandae culpa magnam inventore facilis pariatur aliquid delectus totam distinctio maxime.</p>
        </div>
    );
 
}

export default Contact;