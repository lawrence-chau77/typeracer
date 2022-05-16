interface props {
    correctWords: string;
    paragraph: string;
    input: string;
}

const Preview: React.FC<props> = ({ paragraph, input, correctWords }) => {   
    let correct = true;
    const para = paragraph.split('');
    const corr = correctWords.split('')
    return (
        <div className='preview'> 
            {
                corr.map((s,i) => {
                    return <span key={i} style={{color: '#c1ffad', fontSize:18}}>{s}</span>
                })
            }
            {   
                // For each element of the array
                para.map((s,i) => {
                    let color;
                    // makes the space appear in span if there was space in paragraph
                    if (i < input.length) {
                        if (s === input[i] && correct === true) {
                            color = '#c1ffad'
                        } else {
                            color = 'red'
                            correct = false;
                        }
                    }
                    return <span key={i} style={{color: color, fontSize:18}}>{s}</span>
                })
            }
        </div>
    );
};

export default Preview;