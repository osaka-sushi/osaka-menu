export default function Card({ restaurant: { logoUrl, name, address } }) {

    return (
        <>
            <div className="location">
                <img src={logoUrl} alt="logo" height="100px" width="100px" />
                <h2>
                    {name}
                    {/* <span> {city}</span> */}
                </h2>
                <p>{address}</p>
            </div>
        </>
    )
}