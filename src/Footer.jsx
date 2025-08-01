function Footer(){

    const style_Footer={
        color:"white",
        backgroundColor:"rgba(19, 19, 19, 1)",
        padding:"25px",
        position:"relative"
    }
    return(
        <footer style={style_Footer}>
            <p>&copy; {new Date().getFullYear()} Jade's React Website</p>
        </footer>
    );
}
export default Footer;