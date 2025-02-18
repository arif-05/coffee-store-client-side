import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";

// Create context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // ✅ useState is now inside the functional component
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // ✅ Moved auth inside the function to avoid potential issues
    const auth = getAuth(app);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userInfo = {
        user,
        loading,
        createUser,
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
