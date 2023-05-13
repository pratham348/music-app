import { useEffect, useState } from "react";
import { config } from "../../config/config";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Search from "../../components/common/Search";

const Login = () => {
    const URL = `${config?.authentication}?client_id=${config?.clientId}&redirect_uri=${config?.redirectUrl}&response_type=${config?.responseType}`
    console.log('URL: ', URL)
    const [token, setToken] = useState<string>("");


    useEffect(() => {
        const hash: any = window.location.hash;
        let token: any = window.localStorage.getItem("token")

        if (hash && hash) {

            token = hash?.substring(1).split("&").find((elem: any) => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setToken(token as string)
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token");
    }

    return (
        <>
            {!token ?
                <Box>
                    <Button href={URL} variant="contained">Login to Spotify</Button>
                </Box>
                :
                <Box>
                    <Search type='artist' />
                    <Button onClick={logout} variant="contained">Logout</Button>
                </Box>
            }
        </>
    );
};

export default Login;