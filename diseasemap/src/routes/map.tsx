import { css } from '@emotion/css';
import CardMedia from '@mui/material/CardMedia';


export default function Map() {
    return (
      <div>
        <p>This is Map Page</p>
        <CardMedia
            component="img"
            // image="../assets/images/US_map.jpg"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXeOCVPvG4GFhJb5N6mLRRFmSz2wrH8mw2NvsJeFI9xbdGGeUxiO67vxwBoHbTj29SDWI&usqp=CAU"
            alt="Map Image"
        />
      </div>
    );
  }