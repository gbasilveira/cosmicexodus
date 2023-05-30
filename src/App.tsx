import APIProvider from "./Context/APIProvider";
import BlogProvider from "./Context/BlogProvider";
import FirebaseProvider from "./Context/FirebaseProvider";
import Routes from "./Router";
import "./Styles/styles.scss";

const App = () => {
    return <>
        <APIProvider>
            <FirebaseProvider>
                <BlogProvider>
                    <Routes />
                </BlogProvider>   
            </FirebaseProvider> 
        </APIProvider>
    </>
};

export default App;