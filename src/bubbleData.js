const bubbleData = [
    {
        id: 0,
        style: {top: 700, left: 200},
        isChecked: false,
        setBackgroundColor: 'white'
    },
    {
        id: 1,
        style: {top: 700, left: 1000},
        isChecked: false,
        setBackgroundColor: 'black'
    },
]

export default bubbleData;

// eventually, you wanna switch the id numbering to 
// a two digit system where the first digit is the x axis
// position on the grid and the second the y axis position.
// So 12 would be (1,2) on the page