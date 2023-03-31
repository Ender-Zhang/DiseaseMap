/*
 * @Author: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @Date: 2023-03-30 17:30:40
 * @LastEditors: Ender-Zhang 102596313+Ender-Zhang@users.noreply.github.com
 * @LastEditTime: 2023-03-30 20:36:18
 * @FilePath: \DiseaseMap\diseasemap\src\routes\map.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { css } from '@emotion/css';
import CardMedia from '@mui/material/CardMedia';
import MapChart from '../components/mapComponent';

export default function Map() {
    return (
      <div>
        <p>This is Map Page</p>
        {/* <CardMedia
            component="img"
            // image="../assets/images/US_map.jpg"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXeOCVPvG4GFhJb5N6mLRRFmSz2wrH8mw2NvsJeFI9xbdGGeUxiO67vxwBoHbTj29SDWI&usqp=CAU"
            alt="Map Image"
        /> */}
        <MapChart />
      </div>
    );
  }