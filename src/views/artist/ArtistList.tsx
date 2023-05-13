import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect } from 'react';
import { artistById, artistList } from '../../api/apiAction';

const ArtistList = () => {
    const getArtists = () => {
        const response = artistList()
        console.log('response: ', response)
        const response1 = artistById('0TnOYISbd1XYRBk9myaseg')
        console.log('response1: ', response1)

    }
    useEffect(() => {
        getArtists()
    }, [])
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>

            </CardActionArea>
        </Card>
    );
};

export default ArtistList;