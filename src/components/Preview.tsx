interface props {
    paragraph: string;
    input: string;
}

const Preview: React.FC<props> = ({ paragraph, input }) => {   
    const para = paragraph.split('');
    return (
        <div className='preview'>
            {   
                // For each element of the array
                para.map((s,i) => {
                    let color;
                    // makes the space appear in span if there was space in paragraph
                    if (s === ' ') {
                        return <span key={i}>&nbsp;</span>
                    }
                    if (i < input.length) {
                        color = s === input[i] ? 'green' : 'red';
                    }
                    return <span key={i} style={{backgroundColor: color}}>{s}</span>
                })
            }
        </div>
    );
};

export default Preview;