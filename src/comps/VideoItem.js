import React from 'react' ;
import './videoitem.css' ;

const VideoItem = ({title, tn, channel, date, onSelect, video}) => {
	return (
		<div className="ui item v-item" onClick={() => onSelect(video)} >
			<img className="ui image" src={tn.medium.url} alt="thumbnail" />
			<div className="content" >
				<div className="header" onClick={() => onSelect(video)}> <strong>{title.slice(0, 18)+'...'}</strong></div>
				<a className="description" href="#"> {channel} </a>
				<br />
				<p className="description"> {date.slice(0, 10)} </p>
			</div>
		</div>
		) ;
}

export default VideoItem ;