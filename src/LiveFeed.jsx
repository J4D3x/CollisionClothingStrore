import "./liveFeedCss.css"

function LiveFeed(props){
    const message = `${props.message}`;
    return(
        
        <div id="jade2tuff">
            <p>{message}</p>
        </div>
        
    );
}
export default LiveFeed;