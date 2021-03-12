const bubbleData = [
    {
        id: 0,
        style: {top: '10vh', left: '20vh'},
        isChecked: false,
        setBackgroundColor: 'white'
    },
    {
        id: 1,
        style: {top: '10vh', left: '60vh'},
        isChecked: false,
        setBackgroundColor: 'black'
    },
]

export default bubbleData;

// eventually, you wanna switch the id numbering to 
// a two digit system where the first digit is the x axis
// position on the grid and the second the y axis position.
// So 12 would be (1,2) on the page