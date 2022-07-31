const Footer = () => {
    let currentYear = new Date().getFullYear();
    return (
        <footer className="py-4 footer mt-auto">
            <div className="container text-center">
                &copy;{currentYear} CatStats. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer