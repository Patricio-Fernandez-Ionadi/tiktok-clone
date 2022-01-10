import React from 'react'

import styles from './styles.module.css'

const SongTicker = ({ songTitle }) => {
	return (
		<div className={styles.song}>
			<span className={styles.musicIcon}></span>
			<marquee scrollamount={15}>{songTitle}</marquee>
		</div>
	)
}

export default SongTicker
