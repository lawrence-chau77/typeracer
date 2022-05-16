interface props {
    correctWords: string;
    paragraph: string;
    input: string;
}

const Preview: React.FC<props> = ({ paragraph, input, correctWords }) => {   
    let correct = true;
    const para = paragraph.split('');
    return (
        <div className='preview'>
            <span>{correctWords}</span>
            {   
                // For each element of the array
                para.map((s,i) => {
                    let color;
                    // makes the space appear in span if there was space in paragraph
                    if (s === ' ') {
                        return <span key={i}>&nbsp;</span>
                    }
                    if (i < input.length) {
                        if (s === input[i] && correct === true) {
                            color = 'green'
                        } else {
                            color = 'red'
                            correct = false;
                        }
                    }
                    return <span key={i} style={{backgroundColor: color}}>{s}</span>
                })
            }
        </div>
    );
};

export default Preview;