const Centrepiece = ({ photo }: { photo: string }) => {
    return (
        <div className="center-photo">
            <img src={photo} />
        </div>
    )
}

export default Centrepiece