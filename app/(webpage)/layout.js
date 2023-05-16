import NavBar from "../components/navBar/navBar";
import Footer from "../components/footer/footer";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
}
