import React from 'react'

import styles from './styles.module.css'
import AlbumDisk from './AlbumDisk'
import SongTicker from '../SongTicker'

export default function VideoDescription({
	username,
	description,
	albumCover,
	songTitle,
}) {
	return (
		<footer className={styles.description}>
			<div className={styles.textWrapper}>
				<strong>
					<a className={styles.author} href={`/user/${username}`}>
						@{username}
					</a>
				</strong>
				<p className={styles.text}>{description}</p>

				<SongTicker songTitle={songTitle} />
			</div>
			<div>
				<AlbumDisk albumCover={albumCover} />
			</div>
		</footer>
	)
}
