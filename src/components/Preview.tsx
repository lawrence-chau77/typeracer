
interface props {
    paragraph: string;
    input: string;
}
const Preview: React.FC<props> = ({ paragraph, input }) => {
    const para = paragraph.split('');
    return (
        <div className='preview'>
            {
                // Map each element of para array to its value and index 
                para.map((s,i) => {
                    let color;
                    if (i < input.length) {
                        color = s === input[i] ? 'green' : 'red';
                    }
                    return <span key={i} style={{backgroundColor: color}}>{s} </span>
                })
            }
        </div>
    );
};

export default Preview;