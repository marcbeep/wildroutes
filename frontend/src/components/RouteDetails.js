const RouteDetails = ({route}) => {
    return(
        <div className="route-details">
            <h2>{route.title}</h2>
            <h3>{route.location}</h3>
            <p>{route.description}</p>
        </div>
    )
}

export default RouteDetails