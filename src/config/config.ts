type variables = {
 [key: string]: any
}
export class config implements variables {
 static clientId = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID
 static redirectUrl = import.meta.env.VITE_APP_SPOTIFY_REDIRECT_URI
 static baseUrl = import.meta.env.VITE_APP_SPOTIFY_BASE_URL
 static responseType = import.meta.env.VITE_APP_SPOTIFY_RESPONSE_TYPE

 static authentication = import.meta.env.VITE_APP_SPOTIFY_AUTH

 //artist endpoints
 static artist = "artists"
 static search = "search"
}
