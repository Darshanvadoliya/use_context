import React, { useState } from 'react'

function ToggleButton() {
    const [toggleBtn, setToggleBtn] = useState("start")
    const [bgColor, setBgColor] = useState('white')
    const [inputValue, setInputValue] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const [counter, setCounter] = useState(10);
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('lightblue');

    function ToggleBtn() {
        if (toggleBtn === "start") {
            setToggleBtn("stop")
        } else {
            setToggleBtn("start")
        }
    }

    const changeColor = () => {
        const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightpink', 'lightyellow'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBgColor(randomColor);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const increment = () => {
        setCounter(counter + 1);
    };

    const resetCounter = () => {
        setCounter(10);
    };

    const handleLinkClick = (event) => {
        event.preventDefault();
        alert('Navigation prevented!');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted Input Value:', inputValue);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setMessage(`You pressed "Enter" with value: ${inputValue}`);
        }
    };

    const handleMouseEnter = () => {
        setColor('lightgreen');
    };

    const handleMouseLeave = () => {
        setColor('lightblue');
    };

    return (
        <>
            <div className='' style={{ textAlign: "start", padding: "20px 50px", height: '100%', backgroundColor: bgColor }}>
                <h1>Task : 1 (Toggle Button Text)</h1>
                <div style={{ textAlign: "start" }}>
                    <h2 className=''>{toggleBtn}</h2>
                    <button onClick={() => ToggleBtn()} style={{ backgroundColor: "", padding: "5px 10px", fontSize: '18px' }}>
                        {toggleBtn === 'start' ? "Stop" : "Start"}
                    </button>
                </div>

                <h1>Task : 2 (Change Background ColoronClick event)</h1>
                <button onClick={changeColor} style={{ display: 'block', margin: "20px 0", padding: '10px 20px' }}>Change Background Color</button>


                <div>
                    <h1>Task : 3 (Input Value Display)</h1>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Type something here..."
                        style={{ padding: '10px', fontSize: '16px' }}
                    />
                    <p style={{ marginTop: '10px', fontSize: '18px' }}>
                        You typed: {inputValue}
                    </p>
                </div>

                <h1>Task : 4 (Character Counter)</h1>
                <p style={{ marginTop: '10px', fontSize: '18px' }}>
                    Character Count: {inputValue.length}
                </p>


                <h1>Task : 5 (Conditional Rendering)</h1>
                <button
                    onClick={toggleVisibility}
                    style={{ padding: '10px', fontSize: '16px', marginBottom: '10px' }}>
                    Toggle {isVisible ? "hide" : "Visibility"}
                </button>
                {isVisible && (
                    <p style={{ fontSize: '18px' }}>
                        This is a paragraph of text that can be toggled visible or hidden.
                    </p>
                )}

                <h1>Task : 6 (Reset to Default Value)</h1>
                <p style={{ fontSize: '20px' }}>Counter: {counter}</p>
                <button onClick={increment} style={{ padding: '10px', marginRight: '10px' }}>
                    Increment
                </button>
                <button onClick={resetCounter} style={{ padding: '10px' }}>
                    Reset
                </button>


                <div>
                    <h1>Task : 7 (Prevent Default Behavior)</h1>
                    <a href="https://www.example.com" onClick={handleLinkClick} style={{ fontSize: '18px' }}>
                        Click to go to (Navigation is prevented)
                    </a>
                </div>

                <h1>Task : 8 (Form Handling)</h1>
                <div style={{ padding: "20px 0" }}>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Enter something"
                            style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
                        />
                        <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>
                            Submit
                        </button>
                    </form>
                </div>

                <h1>Task 9: (Keyboard Events)</h1>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}  // Detecting key press here
                    placeholder="Press Enter after typing something"
                    style={{ padding: '10px', fontSize: '16px' }}
                />
                {message && (
                    <p style={{ marginTop: '10px', fontSize: '18px' }}>
                        {message}
                    </p>
                )}


                <h1>Task 10: (Mouse Events)</h1>
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: color,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '2px solid #000',
                        margin: '20px 0',
                        transition: 'background-color 0.3s', // Smooth transition for color change
                    }}
                    onMouseEnter={handleMouseEnter}  // Triggered when the mouse hovers over the element
                    onMouseLeave={handleMouseLeave}  // Triggered when the mouse leaves the element
                >
                    Hover over me!
                </div>
            </div>
        </>
    )
}

export default ToggleButton