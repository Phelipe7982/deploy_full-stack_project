/* eslint-disable react/prop-types */
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const Main = ({ type }) => {
    return (
        <div className="main">

            {/* ItemList de artistas */}
            {type === "artists" || type === undefined ?
                <ItemList title="Artistas" items={7} itemsArray={artistArray} path="/artists" idPath="/artist" /> :
                <></>
            }


            {/* ItemList de músicas */}
            {type === "songs" || type === undefined ?
                <ItemList title="Sons" items={16} itemsArray={songsArray} path="/songs" idPath="/song" /> :
                <></>
            }
        </div>
    )
}

export default Main;