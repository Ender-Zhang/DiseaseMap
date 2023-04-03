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