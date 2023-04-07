import { css } from '@emotion/css';
// import Header from '../components/header';

import diseasedata from '../assets/data/diseasedata.json';

export default function Brief_info(props: {
    id: any;
}) {
    var stateData: any;
    for (let state in diseasedata) {
        if (diseasedata[state].id == props.id) {
            stateData = diseasedata[state];
            break;
        }
    }
    return (
        <div>
            {/* <Header /> */}
            <p>This is test Page</p>
            <p>{stateData?stateData.name:"null"}</p>
            <p>{stateData?stateData.abbreviation:"null"}</p>
            <p>{stateData?stateData.commonDisease:"null"}</p>
        </div>
    );
}
// import { css } from '@emotion/css';

// const containerStyle = css`
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 40px 20px;
//   font-family: Arial, sans-serif;
//   border: 2px solid #ccc;
//   border-radius: 10px;
// `;

// const headerStyle = css`
//   color: #1e90ff;
//   font-size: 3rem;
//   font-weight: bold;
//   text-align: center;
//   margin: 0;
//   padding: 20px;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
// `;

// const itemStyle = css`
//   color: #555;
//   font-size: 1.5rem;
//   line-height: 1.6;
//   margin: 20px;
// `;

// export default function Brief_info(props: {
//     id: any;
// }) {
//     var stateData: any;
//     for (let state in diseasedata) {
//         if (diseasedata[state].id == props.id) {
//             stateData = diseasedata[state];
//             break;
//         }
//     }
//     return (
//         <div className={containerStyle}>
//             <h2 className={headerStyle}>Brief Info</h2>
//             <p className={itemStyle}>Name: {stateData?stateData.name:"null"}</p>
//             <p className={itemStyle}>Abbreviation: {stateData?stateData.abbreviation:"null"}</p>
//             <p className={itemStyle}>Common Disease: {stateData?stateData.commonDisease:"null"}</p>
//         </div>
//     );
// }
