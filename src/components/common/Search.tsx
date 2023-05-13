import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { search } from '../../api/apiAction';

type searchT = {
    [key: string]: string
}
const Search = (props: searchT) => {
    const { type } = props
    console.log('type: ', type)
    const [searchKey, setSearchKey] = useState<string>("")
    console.log('searchKey: ', searchKey)
    const [data, setData] = useState<Array<any>>([])

    const searchArtist = async (value: string) => {
        if (value !== '') {
            const response = await search(value, type)
            console.log('data: ', response?.data?.artists?.items)
            setData(response?.data?.artists?.items)
            // var artistID = data.artists.items[0].id

            // var artistTracks = await axios.get(`https://api.spotify.com/v1/artists/${artistID}/top-tracks`, {
            //     headers: {
            //         Authorization: `Bearer ${access_token}`
            //     },
            //     params: {
            //         limit: 10,
            //         market: 'US'
            //     }
            // })

            // setTracks(artistTracks.data.tracks);
        } else {
            setData([])
        }
    }

    return (
        <Box>
            <TextField
                onChange={(e: any) => { searchArtist(e.target.value) }}
                id="standard-basic" label="Standard" variant="standard" />
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    data?.map((ele: any, index: number) => (
                        <Card sx={{ maxWidth: 345 }} key={index} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    width="140"
                                    image={ele?.images?.[0]?.url}
                                    alt={ele?.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {ele?.name}
                                    </Typography>
                                    <Typography gutterBottom variant="body" component="div">
                                        genres: {ele?.genres?.toString()}
                                    </Typography>
                                    <Typography gutterBottom variant="body" component="div">
                                        followers: {ele?.followers?.total}
                                    </Typography>

                                </CardContent>

                            </CardActionArea>
                        </Card>
                    ))
                }
            </Box>
        </Box>
    );
};

export default Search;