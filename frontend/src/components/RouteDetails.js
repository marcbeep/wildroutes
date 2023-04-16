import {useRoutesContext} from '../hooks/useRoutesContext'
import { useAuthContext } from '../hooks/useAuthContext'
import react from 'react'

const getLargeImage = async() => {
    var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('myImg');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
    modal.style.display = "none";
    }
}

const RouteDetails = ({route}) => {
    const {dispatch} = useRoutesContext()
    const {user} = useAuthContext()
    getLargeImage()
    const handleForceupdateMethod = () =>{
        this.forceUpdate()
    }
    const moreInformation = false


    const likePost = async()=>{
        if(!user){
            return
        }
        const response = await fetch('/api/routes/like/' + route._id, {
            method: 'PATCH',
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        const idCode = route._id
        if(response.ok){
            dispatch({type: 'UPDATE_LIKES', payload: json})
            /*Reload is a temporary solution. Ideally, it would update without refreshing.*/
            window.location.reload(); 
        }
    }

    const unlikePost = async()=>{
        if(!user){
            return
        }

        const response = await fetch('/api/routes/like/' + route._id, {
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        const idCode = route._id
        if(response.ok){
            dispatch({type: 'DELETE_ROUTE', payload: json})
            /*Reload is a temporary solution. Ideally, it would update without refreshing.*/
            //window.location.reload(); 
        }
    }

    return(
        <div id="route-details">
            <img id ="myImg" src={route.image}></img>
            <h7>{route.likedBy.length} likes</h7>
            <h3>📍 {route.location}</h3>
            <h2>{route.title}</h2> 
            <h6>Posted by {route.madeBy}</h6>
            <p>{route.description}</p>
            <div class="book">
                <form>
                    <button formaction="http://google.com">Book</button>
                </form>
            </div>
            {route.likedBy.includes(user.idCode)
                ? 
                    <i className="material-symbols-outlined"onClick={unlikePost}> close </i>
                : 
                    <i className="material-symbols-outlined"onClick={likePost}>favorite</i>
            }
            <div id="myModal" class="modal">
                <span class="close">&times;</span>
                <img class="modal-content" id="img01"/>
                <div id="caption">Marc is stupid</div>
            </div>
            
        </div>
    )
}

/* <span className="material-symbols-outlined" onClick={handleClick}>favorite</span>
*/
export default RouteDetails