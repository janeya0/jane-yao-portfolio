const Text = ({ color, text }: { color: string, text: string }) => {
    return (
        <h4 className='text' style={{ color: color }}>{text}</h4>
    )
}

export default Text