
function Footer(){
    return(
        <footer className="page-footer purple lighten-3">
            <div className="container">
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export {Footer};
